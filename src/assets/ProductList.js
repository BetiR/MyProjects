let productList = [{
    id:1,
    popularity:"",
    name:"FREE",
    price:{
        "Monthly":{"USD":0, "EUR":0, "CHF":0},
        "Annually":{"USD":0, "EUR":0, "CHF":0},
        "2Years":{"USD":0, "EUR":0, "CHF":0},},
    period:{"Monthly":" /mo", "Annually":" /year", "2Years": " /2 years"},
    currency: {"USD":"$", "EUR":"€", "CHF":"CHF" }, 
    comment: "",
    subtitle:"The basics for private and secure communications",
    users: "1 user",
    storage: "500 MB  storage",
    address: "1 address",
    domain: "No domain support",
    options: "",
    vpn: "ProtonVPN (optional) *"
},
{
    id:2,
    popularity:"MOST POPULAR",
    name:"PLUS",
    price:{
            "Monthly":{"USD":4, "EUR":6, "CHF":8},
            "Annually":{"USD":48, "EUR":72, "CHF":96},
            "2Years":{"USD":96, "EUR":144, "CHF":192},
            },
    period:{"Monthly":" /mo", "Annually":" /year", "2Years": " /2 years"},
    currency: {"USD":"$", "EUR":"€", "CHF":"CHF" }, 
    comment: "Billed as $48 per year",
    subtitle:"Full-featured mailbox with advanced protection",
    users: "1 user",
    storage: "5 GB  storage *",
    address: "5 addresses *",
    domain: "",
    options: "Supports folders, labels, filters, auto-reply, IMAP/SMTP and more",
    vpn: "ProtonVPN (optional) *"
},
{
    id:3,
    popularity:"",
    name:"PROFESSIONAL",
    price:{ 
            "Monthly":{"USD":6.25, "EUR":7.5, "CHF":11.25},
            "Annually":{"USD":75, "EUR":90, "CHF":135},
            "2Years":{"USD":150, "EUR":180, "CHF":270}
        },
    period:{"Monthly":" /mo", "Annually":" /year", "2Years": " /2 years"},
    currency: {"USD":"$", "EUR":"€", "CHF":"CHF" }, 
    comment: "Billed as $75 per year",
    subtitle:"ProtonMail for professionals and businesses",
    users: "1-5000 users *",
    storage: "5 GB storage per user*",
    address: "5 addresses per user*",
    domain: "Supports 2 domains*",
    options: "Catch all email, multi user management, priority support and more",
    vpn: "ProtonVPN (optional) *"
},
{
    id:4,
    popularity:"",
    name:"VISIONARY",
    price:{
            "Monthly":{"USD":24, "EUR":36, "CHF":43.2},
            "Annually":{"USD":288, "EUR":432, "CHF":518.4},
            "2Years":{"USD":576, "EUR":864, "CHF":1036.8}
        },
    period:{"Monthly":" /mo", "Annually":" /year", "2Years": " /2 years"},
    currency: {"USD":"$", "EUR":"€", "CHF":"CHF" }, 
    comment: "Billed as $288 per year",
    subtitle:"ProtonMail for families and small businesses",
    users: "6 users",
    storage: "20 GB storage",
    address: "50 addresses",
    domain: "Includes all features",
    options: "Priority support",
    vpn: "Includes ProtonVPN"
}];

export default productList;