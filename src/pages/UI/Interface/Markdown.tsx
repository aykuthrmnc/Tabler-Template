const Markdown = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Markdown</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="card card-lg">
                <div className="card-body markdown">
                  <h1 id="whos-that-then">Who’s that then?</h1>
                  <p>
                    Well, she turned me into a newt. Burn her! We want a shrubbery!! Well, I got better. Listen. Strange
                    women lying in ponds distributing swords is no basis for a system of government. Supreme executive
                    power derives from a mandate from the masses, not from some farcical aquatic ceremony.
                  </p>
                  <p>
                    Listen.{" "}
                    <strong>
                      Strange women lying in ponds distributing swords is no basis for a system of government.
                    </strong>{" "}
                    <em>
                      Supreme executive power derives from a mandate from the masses, not from some farcical aquatic
                      ceremony.
                    </em>{" "}
                    The swallow may fly south with the sun, and the house martin or the plover may seek warmer climes in
                    winter, yet these are not strangers to our land.
                  </p>
                  <h2 id="well-mercias-a-temperate-zone">Well, Mercia’s a temperate zone!</h2>
                  <p>
                    You don’t frighten us, English pig-dogs! Go and boil your bottoms, sons of a silly person! I blow my
                    nose at you, so-called Ah-thoor Keeng, you and all your silly English K-n-n-n-n-n-n-n-niggits! A
                    newt?
                  </p>
                  <ol>
                    <li>
                      Listen. Strange women lying in ponds distributing swords is no basis for a system of government.
                      Supreme executive power derives from a mandate from the masses, not from some farcical aquatic
                      ceremony.
                    </li>
                    <li>
                      I don’t want to talk to you no more, you empty-headed animal food trough water! I fart in your
                      general direction! Your mother was a hamster and your father smelt of elderberries! Now leave
                      before I am forced to taunt you a second time!
                    </li>
                    <li>We found them.</li>
                  </ol>
                  <h3 id="what-do-you-mean">What do you mean?</h3>
                  <p>
                    Oh! Come and see the violence inherent in the system! Help, help, I’m being repressed! The Lady of
                    the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the
                    water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your
                    king.
                  </p>
                  <ul>
                    <li>The Knights Who Say Ni demand a sacrifice!</li>
                    <li>Be quiet!</li>
                    <li>Bloody Peasant!</li>
                  </ul>
                  <p>
                    Well, I got better. Camelot! A newt? We want a shrubbery!! The Lady of the Lake, her arm clad in the
                    purest shimmering samite, held aloft Excalibur from the bosom of the water, signifying by divine
                    providence that I, Arthur, was to carry Excalibur. That is why I am your king.
                  </p>
                  <p>Shut up! …Are you suggesting that coconuts migrate? I’m not a witch. Well, we did do the nose.</p>
                  <p>
                    Well, how’d you become king, then? Shut up! Ni! Ni! Ni! Ni! Well, Mercia’s a temperate zone! I don’t
                    want to talk to you no more, you empty-headed animal food trough water! I fart in your general
                    direction! Your mother was a hamster and your father smelt of elderberries! Now leave before I am
                    forced to taunt you a second time!
                  </p>
                  <div className="language-scss highlighter-rouge">
                    <div className="highlight">
                      <pre className="highlight">
                        <code>
                          <span className="nv">$extra-colors</span>
                          <span className="p">:</span> <span className="p">(</span>
                          {"\n"}
                          {"  "}
                          <span className="s2">"blue"</span>
                          <span className="o">:</span> <span className="nv">$blue</span>
                          <span className="o">,</span>
                          {"\n"}
                          {"  "}
                          <span className="s2">"azure"</span>
                          <span className="o">:</span> <span className="nv">$azure</span>
                          <span className="o">,</span>
                          {"\n"}
                          {"  "}
                          <span className="s2">"indigo"</span>
                          <span className="o">:</span> <span className="nv">$indigo</span>
                          <span className="o">,</span>
                          {"\n"}
                          {"  "}
                          <span className="s2">"purple"</span>
                          <span className="o">:</span> <span className="nv">$purple</span>
                          <span className="o">,</span>
                          {"\n"}
                          {"  "}
                          <span className="s2">"pink"</span>
                          <span className="o">:</span> <span className="nv">$pink</span>
                          <span className="o">,</span>
                          {"\n"}
                          {"  "}
                          <span className="s2">"red"</span>
                          <span className="o">:</span> <span className="nv">$red</span>
                          <span className="o">,</span>
                          {"\n"}
                          {"  "}
                          <span className="s2">"orange"</span>
                          <span className="o">:</span> <span className="nv">$orange</span>
                          <span className="o">,</span>
                          {"\n"}
                          {"  "}
                          <span className="s2">"yellow"</span>
                          <span className="o">:</span> <span className="nv">$yellow</span>
                          <span className="o">,</span>
                          {"\n"}
                          {"  "}
                          <span className="s2">"lime"</span>
                          <span className="o">:</span> <span className="nv">$lime</span>
                          <span className="o">,</span>
                          {"\n"}
                          {"  "}
                          <span className="s2">"green"</span>
                          <span className="o">:</span> <span className="nv">$green</span>
                          <span className="o">,</span>
                          {"\n"}
                          {"  "}
                          <span className="s2">"teal"</span>
                          <span className="o">:</span> <span className="nv">$teal</span>
                          <span className="o">,</span>
                          {"\n"}
                          {"  "}
                          <span className="s2">"cyan"</span>
                          <span className="o">:</span> <span className="nv">$cyan</span>
                          <span className="o">,</span>
                          {"\n"}
                          {"  "}
                          <span className="s2">"gray"</span>
                          <span className="o">:</span> <span className="nv">$gray-600</span>
                          <span className="o">,</span>
                          {"\n"}
                          {"  "}
                          <span className="s2">"gray-dark"</span>
                          <span className="o">:</span> <span className="nv">$gray-800</span>
                          <span className="o">,</span>
                          {"\n"}
                          {"  "}
                          <span className="s2">"dark"</span>
                          <span className="o">:</span> <span className="nv">$dark</span>
                          {"\n"}
                          <span className="p">)</span> <span className="o">!</span>
                          <span className="nb">default</span>
                          <span className="p">;</span>
                          {"\n"}
                        </code>
                      </pre>
                    </div>
                  </div>
                  <p>
                    You can’t expect to wield supreme power just ‘cause some watery tart threw a sword at you! You don’t
                    frighten us, English pig-dogs! Go and boil your bottoms, sons of a silly person! I blow my nose at
                    you, so-called Ah-thoor Keeng, you and all your silly English K-n-n-n-n-n-n-n-niggits!
                  </p>
                  <p>
                    What do you mean? Listen. Strange women lying in ponds distributing swords is no basis for a system
                    of government. Supreme executive power derives from a mandate from the masses, not from some
                    farcical aquatic ceremony.
                  </p>
                  <p>
                    <img src="./static/photos/contemporary-black-and-white-home-decor.jpg" alt="Image Alt" />
                  </p>
                  <p>
                    Well, how’d you become king, then? You can’t expect to wield supreme power just ‘cause some watery
                    tart threw a sword at you! The Lady of the Lake, her arm clad in the purest shimmering samite, held
                    aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to
                    carry Excalibur. That is why I am your king.
                  </p>
                  <p>
                    Well, I got better. Shut up! Will you shut up?! Well, I got better. I don’t want to talk to you no
                    more, you empty-headed animal food trough water! I fart in your general direction! Your mother was a
                    hamster and your father smelt of elderberries! Now leave before I am forced to taunt you a second
                    time!
                  </p>
                  <hr />
                  <h1 id="typographic-elements">Typographic elements</h1>
                  <h2 id="emphasis">Emphasis</h2>
                  <p>
                    <strong>This is bold text</strong>
                  </p>
                  <p>
                    <strong>This is bold text</strong>
                  </p>
                  <p>
                    <em>This is italic text</em>
                  </p>
                  <p>
                    <em>This is italic text</em>
                  </p>
                  <p>
                    <del>Strikethrough</del>
                  </p>
                  <h2 id="blockquotes">Blockquotes</h2>
                  <blockquote>
                    <p>Blockquotes can also be nested…</p>
                    <blockquote>
                      <p>…by using additional greater-than signs right next to each other…</p>
                      <blockquote>
                        <p>…or with spaces between arrows.</p>
                      </blockquote>
                    </blockquote>
                  </blockquote>
                  <p>Bloody Peasant! What do you mean? It’s only a model. Well, Mercia’s a temperate zone!</p>
                  <p>
                    I am your king. Shh! Knights, I bid you welcome to your new home. Let us ride to Camelot! Ni! Ni!
                    Ni! Ni! Who’s that then? Listen. Strange women lying in ponds distributing swords is no basis for a
                    system of government. Supreme executive power derives from a mandate from the masses, not from some
                    farcical aquatic ceremony.
                  </p>
                  <h2 id="lists">Lists</h2>
                  <p>Unordered</p>
                  <ul>
                    <li>
                      Create a list by starting a line with{" "}
                      <code className="language-plaintext highlighter-rouge">+</code>,{" "}
                      <code className="language-plaintext highlighter-rouge">-</code>, or{" "}
                      <code className="language-plaintext highlighter-rouge">*</code>
                    </li>
                    <li>
                      Sub-lists are made by indenting 2 spaces:
                      <ul>
                        <li>
                          Marker character change forces new list start:
                          <ul>
                            <li>Ac tristique libero volutpat at</li>
                            <li>Facilisis in pretium nisl aliquet</li>
                            <li>Nulla volutpat aliquam velit</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>Very easy!</li>
                  </ul>
                  <p>Ordered</p>
                  <ol>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                  </ol>
                  <h2 id="code">Code</h2>
                  <p>
                    Inline <code className="language-plaintext highlighter-rouge">code</code>
                  </p>
                  <p>Indented code</p>
                  <div className="language-plaintext highlighter-rouge">
                    <div className="highlight">
                      <pre className="highlight">
                        <code>
                          // Some comments{"\n"}line 1 of code{"\n"}line 2 of code
                          {"\n"}line 3 of code{"\n"}
                        </code>
                      </pre>
                    </div>
                  </div>
                  <p>Block code “fences”</p>
                  <div className="language-plaintext highlighter-rouge">
                    <div className="highlight">
                      <pre className="highlight">
                        <code>Sample text here...{"\n"}</code>
                      </pre>
                    </div>
                  </div>
                  <p>Syntax highlighting</p>
                  <div className="language-js highlighter-rouge">
                    <div className="highlight">
                      <pre className="highlight">
                        <code>
                          <span className="kd">var</span> <span className="nx">foo</span> <span className="o">=</span>{" "}
                          <span className="nf">function </span>
                          <span className="p">(</span>
                          <span className="nx">bar</span>
                          <span className="p">)</span> <span className="p">{"{"}</span>
                          {"\n"}
                          {"  "}
                          <span className="k">return</span> <span className="nx">bar</span>
                          <span className="o">++</span>
                          <span className="p">;</span>
                          {"\n"}
                          <span className="p">{"}"};</span>
                          {"\n"}
                          {"\n"}
                          <span className="nx">console</span>
                          <span className="p">.</span>
                          <span className="nf">log</span>
                          <span className="p">(</span>
                          <span className="nf">foo</span>
                          <span className="p">(</span>
                          <span className="mi">5</span>
                          <span className="p">));</span>
                          {"\n"}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-transparent d-print-none">
        <div className="container-xl">
          <div className="row text-center align-items-center flex-row-reverse">
            <div className="col-lg-auto ms-lg-auto">
              <ul className="list-inline list-inline-dots mb-0">
                <li className="list-inline-item">
                  <a href="https://tabler.io/docs" target="_blank" className="link-secondary" rel="noopener">
                    Documentation
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="./license.html" className="link-secondary">
                    License
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/tabler/tabler" target="_blank" className="link-secondary" rel="noopener">
                    Source code
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://github.com/sponsors/codecalm"
                    target="_blank"
                    className="link-secondary"
                    rel="noopener"
                  >
                    {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon text-pink icon-filled icon-inline"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                    Sponsor
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-auto mt-3 mt-lg-0">
              <ul className="list-inline list-inline-dots mb-0">
                <li className="list-inline-item">
                  Copyright © 2023
                  <a href="." className="link-secondary">
                    Tabler
                  </a>
                  . All rights reserved.
                </li>
                <li className="list-inline-item">
                  <a href="./changelog.html" className="link-secondary" rel="noopener">
                    v1.0.0-beta20
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Markdown;
