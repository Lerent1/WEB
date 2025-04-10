
if (data[i].status === "Private") {
    document.getElementById("hide").style.display = "none";
}

<div class="list" id="hide"></div>

@media screen and(max - width: 768px) {
    .header {
        flex - direction: column;
        align - items: flex - start;
    }

    .logo h2 {
        font - size: 16px;
    }

    .header input {
        width: 100 %;
        margin: 10px 0;
    }

    .sign {
        width: 100 %;
        display: flex;
        justify - content: space - between;
        right: 0;
    }

    .recent h2 {
        margin - left: 20px;
        font - size: 20px;
    }

    .space {
        flex - direction: column;
        padding: 0 10px;
    }

    table {
        width: 100 %;
    }

    table img {
        width: 100 % !important;
        height: auto!important;
    }

    .text {
        flex - direction: column;
        margin - top: 20px;
    }

    .text div {
        margin - left: 0;
    }

    .head h1 {
        font - size: 24px;
    }

    .posts ul {
        padding: 10px;
        text - align: center;
    }

    .posts ul li {
        display: block;
        margin: 10px 0;
    }

    .posts ul li button {
        font - size: 18px;
    }

    .end {
        flex - direction: column;
        padding: 20px;
    }

    .footer,
    .brand {
        margin - bottom: 20px;
    }

    .icon {
        margin: 20px auto;
    }
}