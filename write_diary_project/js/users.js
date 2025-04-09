const users = [
    {
        name: "Olivia Rhye",
        username: "@olivia",
        status: "online",
        email: "olivia@example.com",
        image: "https://s3-alpha-sig.figma.com/img/2f11/9087/0d753151f58657595136f67c584b5c8c?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fL3UAsO5SsfMok92QMZ4NJM~zvxXqkxmybpNwXyjfRCgkEQDLRwi3Ne2GtN5OLmJCliRpg2zpxo7gz1BBmTlMWdrxL2FmwyzKjN-ubT4YVeHRmqLg4rfUUdwmAUqAyyX9Nqt6o1LX6qLolyWWjtmVd8GL9-unx8y4YxIp9qZHqaNQcCfzUOTNg-5eXRQfaLhskEa3bBXNJAlkCzAbzbUas1e79bik5DkK1fJe7l3BQY-k2QSwJ~xWeIzdovPEKdsYiMdl4BNCOs-lywv9tyhEgGOoCX8Tu7r9HXu4cOP6a-stKacS-m5KneA5~s-X1n4F3gAAf6IZF-sxBJfM5oD-w__"
    },
    {
        name: "Phoenix Baker",
        username: "@phoenix",
        status: "online",
        email: "phoenix@untitledui.com",
        image: "https://s3-alpha-sig.figma.com/img/2780/e16d/b1a4a364d3d872737f7fe9563d7abb29?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aANSAKQw34NJAwqfllY9Yk46cr4FXRLgfEaJa66lUyQVFWVAzrHgpkQPYQcAsPnUwTUqRRRxhfycVPtCrciqve2F31f0HQeXPwm4vx2lCdJLr9ugcReVMFoKkiban-CDJfBwpcSpTHKtRU81qiF6UuOQvzLuJmRrHRLPD3Ilx4dJk766uALoi~a-fAi6g6jex90GwNXhau2kwCOmMkRRVOeAZpEVswI~9~ROTS~pNHig8k~VtHRdyx9ZOPFKgzEQH0XE0Nqizaj-HnUbl4fYVB~9MLPUs1AzVCcGCxSOvALZ3JbVSiS2RifmJXrXez8bY4ETSVB0gZ0bf5LZuUp-ng__"
    },
    {
        name: "Lana Steiner",
        username: "@lana",
        status: "online",
        email: "lana@untitledui.com",
        image: "https://s3-alpha-sig.figma.com/img/d688/ab8b/ff2aebfc3cab587865468c4713ecad78?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VTfL0duCQj6xb8hZwjRzFXxItGPus2FWkDMSmwc4ROG10pX0EapftBxJ0PVSrWVwlJpYvORCAb7b6wqD41t4HuDCljEyBNiJzcm3oJp63oZ2NiS~5yXZBbdFJZqXY1Nma9twAug3YmkF89iu1R7rWhRI8fPC-02pf3eFEeT~sX~AE6h2hh1Gc~Cipvdgi~3HnLjoOm5pxPlHTw-eC9g18pDavEDVaxcI1ka1WyCV-DniGMpTF~Ipn31A1~4btDwkCr6v-ebe1u3IUqLkCpZ~h0-h3zWgED5Vq7zdNM81RM0f4RYtrwMAMdW~svL22l~XQbPnD~qoABemaLGEkQYMKA__"
    },
    {
        name: "Demi Wilkinson",
        username: "@demi",
        status: "online",
        email: "demi@untitledui.com",
        image: "https://s3-alpha-sig.figma.com/img/c9b5/ff46/a30dabca6ca1e017e1047cd06f04270b?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=flfyIrwCWHlLMKQnm~GSXjiU8G-XJa2eWzcTQqm8WobB7frOscoY-L~pgSS0-lLkK6-7DDJKM3h5W2NSd~Fq24ucgDASB~H1OFz9~TCJ3jVuSGkrVKE7qq8xsCaq2tYZX1lJtS6cUTrKo5eB1Kt32iQ3Tou1GB4gBVlPojW9I846TUXu2H02YxTI5EncHLKh3SdKwFiJ7EidP0EVZhmj28TNYbZBNdNSo~L4pU-f-nD45SjwRCp-x2B~urK7H0ju~uB-Qir~7Ap0DDVVBTFace93MdhH--lGCx8Hdvx7ZWnaeGWuGc-qHs47434s7PRVBj7Mw5TG1Wh7Wc54KGxD3w__"
    },
    {
        name: "Natali Craig",
        username: "@natali",
        status: "online",
        email: "natali@untitledui.com",
        image: "https://s3-alpha-sig.figma.com/img/ca26/9fff/9961afb9c6a84bffddcb988a6fad7166?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Rv5vunDSMcEyC4OH~iZ1K45pyU3GPOiCZJy6FsaCLPO2hEf8qiYunIDe1DpxtQSP7KH~8aYl7syY76g22qo3K71y~fU53QSjFyQiEE--nnZgY84MJutHqpO7cAEGkF-qAuC7fal-8GpLaTY7Hglb34fJ9lEUW9m6bBfeYoI1APC-6iFmyRkEWCtkNRRHk-lPvebTow9O5qikd~4n8WbiVCgiufm3rFBIzDggULfg1bx~OidbncfM1ZxzxHzI5aVwsBplNenugW3kBqRsJT2GIV2tjRn1pRQY2nugJ1Ltv0Jw2HDEsyFZKGk0N9iq3p7988cDnty8si90gK~Xu2pFWg__"
    }
]

function show() {
    let list = document.getElementById("information");
    list.innerHTML = "";
    for (let i = 0; i < users.length; i++) {
        let card = `<tr>
                        <td class="inforUser">
                            <img src="${users[i].image}"
                                alt="">
                            <div>
                                <p>${users[i].name}</p>
                                <span>${users[i].username}</span>
                            </div>
                        </td>
                        <td class="status">${users[i].status}</td>
                        <td>${users[i].email}</td>
                        <td class="actions">
                            <button class="block">Block</button>
                        </td>
                        <td class="actions">
                            <button class="unblock">Unblock</button>
                        </td>
                        <td></td>
                    </tr>`;
        list.innerHTML += card;
    };
}

show();