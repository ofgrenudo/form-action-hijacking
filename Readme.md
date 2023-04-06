# Form Action Hijacking
This is an example implementation of an attack called [Form Action Hijacking](https://www.owasp.org/index.php/Form_action_hijacking). This is my implementation of it. If you were to fully implement this, you might want to run a DNS server or intercept trafic to the site and replace their page with yours. The reason these kinds of attacks can be so leathal is because the user belives they are providing their credentials to a trusted entity or site. When in reality they may not be in this example this project.

## Facebook Example Data
facebook => /facebook
```
{
  "jazoest": "2663",
  "lsd": "AVq3mSk1",
  "display": "",
  "enable_profile_selector": "",
  "isprivate": "",
  "legacy_return": "0",
  "profile_selector_ids": "",
  "return_session": "",
  "skip_api_login": "",
  "signed_next": "",
  "trynum": "1",
  "timezone": "300",
  "lgndim": "eyJ3IjoxNDQwLCJoIjo5NjAsImF3IjoxNDQwLCJhaCI6OTI5LCJjIjoyNH0=",
  "lgnrnd": "065000_JIio",
  "lgnjs": "1577026527",
  "email": "test",
  "pass": "superSecurePassKey123456",
  "prefill_contact_point": "test",
  "prefill_source": "browser_onload",
  "prefill_type": "contact_point",
  "first_prefill_source": "browser_onload",
  "first_prefill_type": "contact_point",
  "had_cp_prefilled": "true",
  "had_password_prefilled": "false",
  "ab_test_data": "/VAAAAAVAAAAAAAAAAAAVAAAAAAAAAAAAVAAAAAAAVVq/qAAAVEDAA"
}
```
## WMU Example Data
WMU => /wmu
```
{
  "username": "test",
  "password": "superSecurePassKey123456",
  "lt": "LT-35037-ezjPqvS0PDgwAbZ7jVUfBJeogj2s9J",
  "execution": "706e7de2-e6ee-4882-8859-a5a09332ff2a_ZXlKaGJHY2lPaUpJVXpVeE1pSjkuVkZkQmRqUk9NV3B5TTA0eWJFdFFaV0ZTZEdaQmNuSm9UVm8wY2tkbFdFZDBTSFZ0T1M5YWVYTlRRM2x1ZUN0M1pVRjZWMnhQUTNsNksxa3JNMWRwY0VkeU5FeGhWVTg1T0dSTFdEUlRVbFY1ZDJjdmVXOXhhM1pJTjAxNFpWaFJUVFk1ZVU5M0t6WkxZbGxPZGpGb2NWZFRURk0zWjFob2J6bEVVMWhqWTA1SGEyZEtSV1lyZURRelprOVZVa2d5VjJoeVN6SjZUVkpIZG1wSGVraEdZMU51VTBaMlpIQk1ZM1JGWjNOdVNVdEZkRzR4TkVZdlVGVTRjVUo2YjBGVk1uUnViV1JaYWtKMk1XSnZSR3BGVkU5ME5rTnRVa000U3pRM0wwWjFVM1ZIWlM5V1JGWmhiMVpzZEhBdlYxaFJhbGxaVEZObFExUlVVVk0zYldwSVNHbDZLMFZUVUhscVoycFRZbFowY0VGYVNFUldjbGR0VDNOdU1EUlFjVFJtZFhnNWRpdFVWbEZvUXpoWk0yNWphRFZ4VkhKbFZ6Uk9UV3hyUjNaelpITkpaREpEVkM5cFVWRXpVQ3RDUlVoSWNFRnljeXN4VjNkNFZYRnVVRnBRTDFCcGNsVldURU40YURGTmFrSjFSRzg1U0ZoVVdWbHNRV1JFUVhkNlkweEJiM0JMU1dwUmVVOUNabGRxT0daSmJsQlJjRTVNVERCdFFraHdUMmxFTDNacldGVm1TVlpDYlhwMlozaDVkSFU1YkVsQ1ZsZFdUMWdyTnpCck9XMXZjalp6WjJSTGFUbFZlSEJ0YzJGQmRrNUpUakl2SzFsMVZVOVpjWGh2Ym1GSGFVeFZXbXR2VWpaTGFYSlpaRk5oY0ZwbVVTOXZRMG8wTVc1dlFtaDRNbGhhVDBKUVJEVkRObk5oUkM5ck0yeHBTVTlJTjNrdlpYTTBXVnBHY1hOdFVtWlZja05PSzBvNWQwaGxOVkJxZUhwVU56ZHVVREJ1VDFNemExRXZkVlozYkRaTWNVdHpWblpNV1RSNWJVcHhSVEJSTW5BdmVsVlhaMjU2UWtack5XTXhTRXBQUW1kUVJFVnNjRFpOTDJkUVdIWmpNRzU1VTAxeFNXOWFObVJoUzJ0aFRGUlpXamsxT1ZOSFVHTk9TMXB6U0RkbmJVWkZRa0k1TTFsek5WSTBSV2hXUm14VU1ESldhRTFWYWpkS2NtbFZUekY1Ym5abVlraFRWVWRWU1dFelptcEZZMlUzU3pWM1NGZFJTbUoxZWxkb1kxcFNVMVIwY0drdmRsZ3ZUMVYwWjNFNVJYTjVWM0F3ZURSUVRsSkhWREJVTkVKcU9VaGlkbGwzTHpkaVJuTklSelpXUWtkRVNsZE9RVnA2VVRCMmEyTlVRVVJsWldWTVpsTXpSbTFNTDJaR2ExTkJWR0ZMTVRKUWRYUTJWbkprTlVWa00xcHNlbHB4V1UwMVFVbzRNbE5hUjFoT1VHWXlhVTE0ZWpWaGFqSk5hMWhyWlVSaWRUQnNaM1J1TjJaU1VIQk5kVVJZVFUxSVluRlVZelpKY2l0RVFVMHpUM1Z1VnpWdlVsTnJjRXBMZUROaFdIRlFUVVJLYVROT1dIY3hibTlPVm5wMGEyVjBWekF5ZWlzMFZpdHllVU5hWVdaTmNVZEliRUUxWlhOaGFHeEtNRkYwSzJwSWF6UnlSbkFyZFhGa1NXSkxjbFFyWWpWMVJHbHNNVk14YlRkMmRYSjZkR0paUlhKMVpsbENhMmxqYzNkeUx6RXlhREJvVkdKbWIyWnNORTFxVFVoS1NXSjNhV1EwUlZKUmRYSkdObXBIUTBWUVdUUlFPRzU2VUVGQlRVVXZiVWhLU2xWR1JqWkhlVnBxYzNCd00yMXlXWE13U1RocFYzSjZOV3AzVkVOVlpsQkJiM2REWmtRNE9FOTNiRVF4YTFWb1RtMWhNblJ2Wmk5bmJtRjVZVTFPUlRsWloxQmFUVzh2WkRGbGRXUnhWR2REVDBwSFIyNWlWbEpqYlhKYVZGaGxiMEo2TTBzMVl5dHpUbEJuU1d4MFQwVXpjR05OT1dGSFlqSTJaRE56UzBoMVVXZEJReTlwTjJoMU5XWk1hbFl3YVhScGIxUXlORWhOWnpGTFVYVlVhamh4TDNwa1NVRjRNa1F3WjFoSmQzQnVVVEJ1V0U4elJFRTlQUS41TXhNbDUyY1ZKYkk2dDZWVUtqc0ZfR0I3LVVqWGQ2NG9WTnJfR3BZdFZmSEpzYzNER3Nhckk2c2daMy1icjEweVcxLXg4NVVnS25ab1YwZkctc0o5QQ==",
  "_eventId": "submit",
  "submit": "Log In"
}
```


# Disclaimer
Any actions and or activities related to the material contained within this application are solely your responsibility. The misuse of this software can result in criminal charges brought against the persons in question. The authors of form_action_hijacking (Joshua Winters-Brown) will not be held responsible in the event any criminal charges be brought against any individuals misusing this application to break the law.

# License
This is software was written by Joshua Winters-Brown as a example implementation of the described attack [here](https://www.owasp.org/index.php/Form_action_hijacking) or https://www.owasp.org/index.php/Form_action_hijacking. That being said, you have the permisions granted in the file ./License but i am not responsible for the use of this program. Any questions or concerncs, Please contact me at joshuawintersbrown@gmail.com 