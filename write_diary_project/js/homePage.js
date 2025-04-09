let article = JSON.parse(localStorage.getItem("article")) || [
    {
        title: "A Productive Day at Work",
        date: "2025-02-25",
        content: "Today was a really productive day at work. I managed to <br>finish a report ahead of schedule and received positive<br> feedback from my manager.",
        mood: "chill",
        status: "Public",
        entries: "Daily Journal",
        image: "https://s3-alpha-sig.figma.com/img/9ca4/12fa/840de131974162b09d68033e23a850b5?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MLUFkufR67hzPjgxu62-6kClL3KtrjCuhY-Wa7R3WMkn6XFbU5rQ~8r1ciIaiE0h6aM9VOMTsHk8JhhhMxo2ByuWio5C8E7ieveAqsYLgCyKO-A6R02ryUQ2WDshcIT1Id9hVOO8Sbua-OAA1-6M0j8nEQoLnaVidtSy2s0rHsAz7lBxVE0cGloK4dDyMT65PFR4YDs~JZeV6zUCSG~03d18PmY3Iq8lP2aO~cRNWvdnF8uCdN0~g3A0Mbj-Zlkc~IAjKn3BOqE-Am2W0Yd3BWBYE~D1MHQksX1LUwcjwiyegRctGXerA86UKnZ6YgfHJQfd2eD-qmcqiKvJwMq9~Q__"
    },
    {
        title: "My First Job Interview Experience",
        date: "2025-02-24",
        content: "I had my first job interview today! I was nervous at <br>first, but as the conversation went on, I felt more<br> confident.",
        mood: "happy",
        status: "Public",
        entries: "Work & Career",
        image: "https://s3-alpha-sig.figma.com/img/0095/33dd/b18880647940253fa905f2a8d6a3a95e?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nJiS9HLhwj3wfm4dgTKA4c07msD4PKuDOJA1Te-rBlxg731HAWlEKg0w-QRrpXDOfSOGeXVTjHQfsR7FzXhZ3WQu0geBPLFF58ZqQZSbfje7asS75DH1hH5c1u6VzgifiEvJ6GV~mRh9qr9UydvO9WqtuOOGru-nkQ4Y-mZw9gGAcUlpIOqsCrGBylEJiwf2r2m-gsMAG68E3Yqmee1sIgiwoeBS7N0CuVBtGBL-SE6TjZJKFcZgWQqzvFMs3fEsu1cBXmFz09jtMkeYt-pMUK~QHA-WS8ouCClNlEmDgi06KcvDKBOLKN-TNiyxgshIU2hesvLDT2TMimU7QPHMvw__"
    },
    {
        title: "Overthinking Everything",
        date: "2025-02-23",
        content: "Lately, I have been overthinking everything, from small<br> decisions to bigger life choices.I know I should trust<br> myself",
        mood: "sad",
        status: "Private",
        entries: "Personal Thoughts",
        image: "https://s3-alpha-sig.figma.com/img/c220/b565/fba3f3369a85cb9bd4d04bf17c85be21?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZLpV7RXVJdcUxLSS9rsj98xGWJarL0-L67J5RwLZoUS6xW7heUX-S8i6kPa-5wrZxyY8BBpYpvAkzNX7CXwB6H6SeN-kNWD7dvlJrOYORJuC7kgdwkO-QkfvT2SodS-IK3CKnSO1DxO5HVv7jgmB8dG4zRfG1sMwQBxn0H2H2QG2VvCJIRYqns2AqHlyOcGLNHMk7KukgzIm5OfZyaQT9VA~uH-WgQh-OsD04XSdx9nU4O2a3GhV8aivFFV8r1lcM7msglRTiSAPr1regeTuYZ2Xlis2MoufT1yuqBUnm9GZItc4UAKn-3shi-SL-rGtGJqa4xuduM5T5YSfDstf-A__"
    },
    {
        title: "How collaboration makes us <br>better designers",
        date: "2025-02-16",
        content: "Collaboration can make our teams stronger, and our<br> individual designs better.",
        mood: "inspired",
        status: "Public",
        entries: "Work & Career",
        image: "https://s3-alpha-sig.figma.com/img/950f/4305/76ceafadb9f758a56d19a086f7505a80?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aLwtnQgz~8952Fbk6fMxUxFpRCreO0Oly2gAIZIEPYNGQoK3u2UDO-sVHQnNccWBQwdfbeRMu7JTgDo1IkeKnKM0-Wj9wHH5mGH4O817GLBcu3vA9pVqECs5Q8wlhP8r~JZKgsNsBM47Y5gzgwpbaOmY39oikKAOHvqqJu~A-ggF95kyMG6CBmHq5nJ4KD5Wqd~N3RGqtRl5y9zdqWjwu5P-1ZvgtcsiC8NTTKH00lyP5EQEn7uoKKdxBJCgqIyoC7N7Se33GTdGgvzzpTNoms6OnuU17U51AuwOy4FGMUD4wDF-pD95rF84AnDBO3MBMu7xxNQH1cgSIyY2hehM9A__"
    },
    {
        title: "Our top 10 Javascript<br> frameworks to use",
        date: "2025-02-15",
        content: "JavaScript frameworks make development easy with<br> extensive features and functionalities.",
        mood: "excited",
        status: "Public",
        entries: "Work & Career",
        image: "https://s3-alpha-sig.figma.com/img/1155/4089/6b913ddf85158d3f3246fba7da982400?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rZWfsK8ApigGMJgAC8BwCuzNwWJWMD5CJCVpK9QUdhXu7TaT2uUTQmWwYke4smy~PDfEd1p0a0BNq9PNyNyuN0KHBXggarklf3WSduxHzw368WvEkSDbAgow7rD2x6a~tGig0RHBhOXvDyJ7JwWjAKHEJcJ6FnFKUaUrDC9-7MFkuxGF0cEFzaTMWh-2EBYxaUybjIyK-VtZsbUMPdBA-Vk-MdreiBZRlJvmpsOjlURWFTHlAyA~UrhHNDGiqPswF166SyefP8PjTD-CnqjLwtBpz4vigmtYEJ6q6e8JhU7E1CUjdUXO5KGOxoVd81eVLPhfom8s93Y5b~yeCSrYdw__"
    },
    {
        title: "Podcast: Creating a better<br> CX Community",
        date: "2025-02-05",
        content: "Starting a community doesn't need to be complicated, but<br> how do you get started?",
        mood: "curious",
        status: "Public",
        entries: "Emotions & Feelings",
        image: "https://s3-alpha-sig.figma.com/img/b86d/a4b5/ab8c0e971321e0daafdbc3bc3adffb48?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LAaEySHDPBrMtsUPIqPH4-gP5UvwUdoJjhkOZgkhcin7TqlFUT7NpfisA-SERgxLSj37C4OcggqSzsHINZwKhsAiY9oFb7V1OhUeVPgeSqjbk1-V8-48i3lwAzuEbcv32veqj6Nyo5sU76wLNFI1CgehJBQETjsqeaXKdcL1-u4LE8IKRcVeYc7FDFohffZ6Tt9j0MmmIc5xKg-2a2KzfBbygX1XQ358WMgHwV2KISpNFYYNC2J-r2KhykIRwyg~kGqWWDJbnrUHelSy5sUvoUmitFy1JPgJAdDKMyMRcc4hP-psv9d8mPJqtxBHbI7Ax0C26WyP4eqzMxLNeS0MEw__"
    }
]
localStorage.setItem("article", JSON.stringify(article));

function show(data = article) {
    let list = document.getElementById("list");
    list.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let card = `<div class="list">
                    <img src="${data[i].image}" width="384" height="240" alt="">
                    <p>Date: ${data[i].date}</p>
                    <img src="../assets/images/Icon wrap.png" onclick="openDetail(${i})" class="image">
                    <h3>${data[i].title}</h3>
                    <span>${data[i].content}</span>
                    <p class="daily">&nbsp; &nbsp;${data[i].entries}</p>
                </div>`;
        list.innerHTML += card;
    }
}

function openDetail(index) {
    localStorage.setItem("details", index);
    window.location.href = "../html/details.html";
}

function search(category) {
    if (category === "all") {
        show(article);
    } else {
        let results = article.filter(item => item.entries === category);
        show(results);
    }
}

show();

function signUp() {
    window.location.href = "../html/register.html"
}

function signIn() {
    window.location.href = "../html/login.html"
}