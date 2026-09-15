# Play Store production release gate

- Register the publisher's legal entity, support email, website and privacy-policy URL.
- Obtain legal approval for privacy, terms, community standards, child safety, copyright, location handling and country-specific consumer obligations.
- Create a Play App Signing key inside Play Console; store upload-key material and passwords only in the CI secret manager.
- Produce an Android App Bundle with the release variant and verify the signing certificate fingerprint.
- Complete Data safety, Content rating, Target audience, Ads, App access and account-deletion declarations from the deployed behavior.
- Provide reviewer credentials for Circle and document every permission.
- Run the Android interaction suite across phone/tablet sizes and supported Android versions; retain screenshots and accessibility results.
- Complete closed testing, crash/ANR monitoring, vulnerability review, backup/restore drills and incident-response ownership.
- Verify vendor contracts and credentials for booking, media, verification, maps and messaging before enabling those production services.

No production signing key, legal identity or vendor credential belongs in this repository.
