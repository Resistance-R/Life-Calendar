const quotes = [
    {
        quote: "오늘 내가 죽어도 세상은 바뀌지 않는다. 하지만 내가 살아 있는 한 세상은 바뀐다.",
        source: "- 아리스토텔레스 -",
    },

    {
        quote: "인생은 흘러가는 것이 아니라 채워지는 것이다. 우리는 하루하루를 보내는 것이 아니라 내가 가진 무엇으로 채워가는 것이다.",
        source: "- 존 러스킨 -",
    },

    {
        quote: "장의사마저도 우리의 죽음을 슬퍼해 줄만큼 훌륭한 삶이 되도록 힘써야 한다.",
        source: "- 마크 트웨인 -",
    },

    {
        quote: "우리의 인생은 우리가 노력한 만큼 가치가 있다.",
        source: "- 프랑수아 모리아크 -",
    },

    {
        quote: "인생은 한 권의 책과 같다. 어리석은 이는 그것을 마구 넘겨 버리지만, 현명한 이는 열심히 읽는다. 인생은 단 한 번만 읽을 수 있다는 것을 알기 때문이다.",
        source: "- 상 파울 -",
    },

    {
        quote: "네가 좀더 자자, 좀더 졸자, 손을 모으고 좀더 눕자하니 네 빈궁이 강도 같이 오며",
        source: "< 잠언 24:33 >"
    },

    {
        quote: "너희에게 평강이 있을지어다",
        source: "< 요한복음 20:19 >"
    },

    {
        quote: "진리를 알지니 진리가 너희를 자유케 하리라",
        source: "< 요한복음 8:32 >"
    },

    {
        quote: "지런한 자의 손은 사람을 다스리게 되어도 게으른 자는 부림을 받느니라",
        source: "< 잠언 12:24 >",
    },

    {
        quote: "내일 일을 자랑하지 말라 하루동안 무슨 일이 일어날지 네가 알 수 없음이니라",
        source: "< 잠언 27:1 >",
    },

    {
        quote: "우리가 선을 행하되 낙심하지 말지니 포기하지 아니하면 때가 이르매 거두리라",
        source: "< 갈라디아서 6:9 >",
    },

    {
        quote: "의에 주리고 목마른 자는 복이 있나니 그들이 배부를 것임이요",
        source: "< 마태복음 5:6 >",
    }
]

const quote = document.querySelector("#quotes h3");
const source = document.querySelector("#quotes span");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
source.innerText = todaysQuotes.source;