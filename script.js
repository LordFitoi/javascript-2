const Header = `
    <header>
        <div class="container">
            <a>Home</a>
            <a>About</a>
            <a>News</a>
        </div>
    </header>
`;
const Body = `
    <div id="body">
        <h1>Sample Heading:</h1>
        <div class="flex">
            <div class="img-placeholder"></div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, doloremque, doloribus, ea, eius, ipsa, ipsum, is te,
                laudantium, molestias, natus, nisi, quae, quisquam, quod, quos,
                sapiente, sed, similique, tempore, veritatis, voluptas.<br>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
        </div>
        <div class="flex">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, doloremque, doloribus, ea, eius, ipsa, ipsum, is te,
                laudantium, molestias, natus, nisi, quae, quisquam, quod, quos,
                sapiente, sed, similique, tempore, veritatis, voluptas.<br>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div class="img-placeholder"></div>
        </div>
    </div>
`;
const Aside = `
    <aside>
        <h2>Example List:</h2>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
        </ul>
    </aside>
`;

const Footer = `
    <footer>
        <div class="container columns">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>News</li>
            </ul>
            <ul>
                <li>Extra Info</li>
                <li>Privacy & Terms</li>
                <li>Policy</li>
            </ul>   
        </div>
    </footer>
`;


document.write(`
    ${Header}
    <main>
        ${Body}
        ${Aside}
    </main>
    ${Footer}
`);
