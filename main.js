var password=prompt("Password: ");
var siteSalt=prompt("Site Salt: ");

var salt = "950130eec143886e41cf056ecbab427b3e9487fabdd6ced6845d599d4fa09aa5";

var stretched = CryptoJS.PBKDF2(password,salt,{keySize: 256/32});

var hashedPass = CryptoJS.sha256(stretched+siteSalt);

var finalPass = CryptoJS.enc.Base64.stringify(hashedPass);

alert(finalPass);
