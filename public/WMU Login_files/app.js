//var hdblogUrl = "https://labshifts.bernhard.wmich.edu:9001/api/v1/cas";
var hdblogUrl = "https://wmich.edu/7help/hdblog/api/v1/cas";

var component = Vue.component('announcement', {
    name: 'announcement',
    template: '#announcement-template',
    props: {
        description: String,
        type: String,
        url: String,
        current: Boolean
    }
})

var app = new Vue({ 
    el: '#page',
    component: {
        announcement: component
    },
    data: {
        announcements: [],
        bnid: ''
    },
    mounted: function () {
        this.getOutages()
    },
    methods: {
        getOutages: function () {
            axios.get(hdblogUrl)
                .then(function (response) {
                    app.announcements = response.data;
                    console.log(app.announcements);
                })
        }
    },
    computed: {
        bnidError: function () {
            var win = new RegExp("^\\d{9}$");
  			if(win.test(this.bnid)) {
                return true
            } else if(this.bnid.indexOf('@') > -1) {
                return true
            } else {
                return false
            }
        },
        bnidErrorMessage: function () {
            var win = new RegExp("^\\d{9}$");
            if(win.test(this.bnid)) {
                return 'Bronco NetID format error! \nIt appears you may be entering your Western Identification number (WIN) instead of your Bronco NetID.'
            } else if(this.bnid.indexOf('@') > -1) {
                return 'Bronco NetID format error! \nIt appears you have entered your email address instead of your Bronco Net ID.'
            } else {
                return 'false'
            }
        }
    },
    filters: {
        decodeHtml: function (value) {
            var txt = document.createElement("textarea");
            txt.innerHTML = value;
            return txt.value;
        }
    }
});
