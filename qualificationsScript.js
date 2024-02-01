window.onload = function() {
    var buttons = document.querySelectorAll('.portfolioSquareButton');
    var dynamicContentContainer = document.getElementById('dynamicLink');

    buttons[0].onclick = function() {
        dynamicContentContainer.innerHTML = '<p id="replaceableLink">Skills - Languages: Python, JavaScript, Assembly, C++ ||| Tools: MatPlotLib, React, Node, Express.js, MongoDB, Mongoose, Pipedream, Playwright, JSX, Electron, Selenium ||| Miscellaneous: LaTeX, Blender, Yosys, ABC, Git, Github, Linux, LTSpice, SLURM, Postgresql ||| Soft Skills: Problem Solving, Teamwork, Communication</p>';
    };

    buttons[1].onclick = function() {
        dynamicContentContainer.innerHTML = '<a href="resume-link.html" id="replaceableLink"><img src="resume-image-path.jpg" alt="Resume" /></a>';
    };

    buttons[2].onclick = function() {
        dynamicContentContainer.innerHTML = '<p id="replaceableLink">Areas of Interest - 1. Hardware Security: I have been a part of the Secure and Trustworthy Hardware lab here and have enjoyed my work. ||| 2. I am currently working for a student startup where I am tasked with writing and reviewing firmware code for our prototype. ||| 3. Language Learning Models: I have always had a love for English as a subject, and would love to combine it with computer science.</p>';
    };
};
