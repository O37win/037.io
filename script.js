// script.js

// 获取按钮元素
const aboutButton = document.getElementById("aboutButton");
const projectButton = document.getElementById("projectButton");
const worksButton = document.getElementById("worksButton");
const xButton = document.getElementById("xButton");
const yButton = document.getElementById("yButton");

// 添加点击事件处理函数
aboutButton.addEventListener("click", function() {
    document.getElementById("result").innerHTML = `
        <h4>Introduction</h4>
        <p>I am 037win. I am humble, eager to learn new things, and serious and responsible in my work. I excel in mathematics and have been raised by my parents with an open educational approach, allowing me to freely choose my interests and hobbies, thereby cultivating a wide range of interests.</p>
        <h4>Programming Languages Learned</h4>
        <ul>
            <li>Python</li>
            <li>C</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
        <h4>My Programming Learning Journey</h4>
        <p>During my elementary and junior high school years, I enjoyed writing programs and attended Scratch classes outside of school. Later, in high school at Zhongli High School, I met a classmate and, being in the digital age, officially embarked on my programming learning path.</p>
        <p>In my first year of high school, I met Stupienius, who had exceptional programming skills. Whenever I encountered problems while self-studying, I would seek his help to find solutions. Fortunately, I could learn Python and C in my computer science and elective courses. Therefore, I decided to use my self-study sessions in the first year to learn HTML and JavaScript and set up this website.</p>
    `;
});

projectButton.addEventListener("click", function() {
    document.getElementById("result").innerHTML = `
        <h4>Preface</h4>
        <p>The reason I want to set up this website is because I want to document some of my programming learning processes and showcase my learning achievements and projects on the website for everyone to reference and play with.</p>
        <h4>May 2, 2024</h4>
        <p>I am learning the basics of Python, C, HTML, and JavaScript through computer science classes, elective courses, and self-study sessions, and I have started building the website.</p>
        <h4>May 16, 2024</h4>
        <p>Today, I've already completed 50% of the website setup! Go! Go! Go!</p>
    `;
});

worksButton.addEventListener("click", function() {
    const resultDiv = document.getElementById("result");

    // 清空結果區域
    resultDiv.innerHTML = "";

    // 創建正方形框框
    const square = document.createElement("div");
    square.style.width = "100px";
    square.style.height = "100px";
    square.style.backgroundImage = "url('https://i.imgur.com/F2axrbN.png')";
    square.style.backgroundSize = "cover";
    square.style.backgroundPosition = "center";
    square.style.cursor = "pointer";
    square.style.display = "inline-block";
    square.style.margin = "10px";

    // 添加點擊事件以跳轉到另一個網址
    square.addEventListener("click", function() {
        window.location.href = "https://o37win.github.io/O37win.2048game.github.io/";
    });

    // 將正方形框框添加到結果區域
    resultDiv.appendChild(square);
});

xButton.addEventListener("click", function() {
    document.getElementById("result").innerHTML = `
        <p>Not completed</p>
    `;
});

yButton.addEventListener("click", function() {
    document.getElementById("result").innerHTML = `
        <p>Not completed</p>
    `;
});
