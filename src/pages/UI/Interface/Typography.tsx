const Typography = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Typography</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="card card-lg">
            <div className="card-body ">
              <div className="row g-4">
                <div className="col-12 markdown">
                  <h1>1/1 Text</h1>
                  <p>
                    I'm not a witch. Now, look here, my good man. Oh! Come and see the violence inherent in the system!
                    Help, help, I'm being repressed! Well, I didn't vote for you. You can't expect to wield supreme
                    power just 'cause some watery tart threw a sword at you! Bring her forward! He hasn't got shit all
                    over him. He hasn't got shit all over him. We shall say 'Ni' again to you, if you do not appease us.
                  </p>
                  <p>Well, we did do the nose. Why? Now, look here, my good man. Be quiet! Well, what do you want?</p>
                </div>
                <div className="col-md-6 markdown">
                  <h2>1/2 Text</h2>
                  <p>
                    What do you mean? We shall say 'Ni' again to you, if you do not appease us. I have to push the pram
                    a lot. No, no, no! Yes, yes. A bit. But she's got a wart. What a strange person.
                  </p>
                </div>
                <div className="col-md-6 markdown">
                  <h2>1/2 Text</h2>
                  <p>
                    And this isn't my nose. This is a false one. We found them. Listen. Strange women lying in ponds
                    distributing swords is no basis for a system of government. Supreme executive power derives from a
                    mandate from the masses, not from some farcical aquatic ceremony.
                  </p>
                </div>
                <div className="col-md-4 markdown">
                  <h3>1/3 Text</h3>
                  <p>
                    Knights of Ni, we are but simple travelers who seek the enchanter who lives beyond these woods. Why?
                    Well, what do you want? …Are you suggesting that coconuts migrate?
                  </p>
                </div>
                <div className="col-md-8 markdown">
                  <h3>2/3 Text</h3>
                  <p>
                    Well, I got better. Knights of Ni, we are but simple travelers who seek the enchanter who lives
                    beyond these woods. Found them? In Mercia?! The coconut's tropical! A newt? …Are you suggesting that
                    coconuts migrate?
                  </p>
                </div>
                <div className="col-md-8 markdown">
                  <p>
                    I don't want to talk to you no more, you empty-headed animal food trough water! I fart in your
                    general direction! Your mother was a hamster and your father smelt of elderberries! Now leave before
                    I am forced to taunt you a second time! We want a shrubbery!!
                  </p>
                  <p>
                    Well, how'd you become king, then? Found them? In Mercia?! The coconut's tropical! Oh, ow! I am your
                    king.
                  </p>
                </div>
                <div className="col-md-3 markdown">
                  <h4>Small Text</h4>
                  <p>Well, Mercia's a temperate zone! You don't vote for kings. Now, look here, my good man. </p>
                  <p className="text-secondary small lh-base">Who's that then? Well, we did do the nose.</p>
                </div>
                <div className="col-md-4 markdown">
                  <h3>Unordered list</h3>
                  <ul>
                    <li>lorem ipsum doloret</li>
                    <li>
                      lorem ipsum doloret
                      <ul>
                        <li>lorem ipsum doloret</li>
                        <li>lorem ipsum doloret</li>
                      </ul>
                    </li>
                    <li>lorem ipsum doloret</li>
                    <li>lorem ipsum doloret</li>
                  </ul>
                </div>
                <div className="col-md-4 markdown">
                  <h3>Ordered list</h3>
                  <ol>
                    <li>lorem ipsum doloret</li>
                    <li>lorem ipsum doloret</li>
                    <li>lorem ipsum doloret</li>
                    <li>lorem ipsum doloret</li>
                    <li>lorem ipsum doloret</li>
                    <li>lorem ipsum doloret</li>
                  </ol>
                </div>
                <div className="col-md-4 markdown">
                  <h3>Unstyled list</h3>
                  <ul className="list-unstyled">
                    <li>lorem ipsum doloret</li>
                    <li>lorem ipsum doloret</li>
                    <li>lorem ipsum doloret</li>
                    <li>lorem ipsum doloret</li>
                    <li>lorem ipsum doloret</li>
                    <li>lorem ipsum doloret</li>
                  </ul>
                </div>
                <div className="col-12 markdown">
                  <h3>Blockquote</h3>
                  <blockquote className="blockquote">
                    <p>
                      I don't want to talk to you no more, you empty-headed animal food trough water! I fart in your
                      general direction! Your mother was a hamster and your father smelt of elderberries! Now leave
                      before I am forced to taunt you a second time! The nose?
                    </p>
                    <footer className="blockquote-footer">Julius Cesar</footer>
                  </blockquote>
                </div>
                <div className="col-md-4 markdown">
                  <h3>Text elements</h3>
                  <div>
                    You can use the mark tag to <mark>highlight</mark> text.
                  </div>
                  <div>
                    <s>This line of text is meant to be treated as deleted</s>
                  </div>
                  <div>
                    <u>This line of text will render as underlined.</u>
                  </div>
                  <div>
                    <small>This line of text is meant to be treated as fine print.</small>
                  </div>
                  <div>
                    The following snippet of text is <strong>rendered as bold text.</strong>
                  </div>
                  <div>
                    The following snippet of text is <em>rendered as italicized text.</em>
                  </div>
                  <div>
                    The following snippet of text show useful keyboard shortcut: <kbd>⌘</kbd> + <kbd>C</kbd> or{" "}
                    <kbd>ctrl</kbd> + <kbd>C</kbd>.
                  </div>
                </div>
                <div className="col-md-4 markdown">
                  <h3>Text color</h3>
                  <div className="text-primary">This is an example of primary text.</div>
                  <div className="text-secondary">This is an example of secondary text.</div>
                  <div className="text-body">This is an example of body text.</div>
                  <div className="text-success">This is an example of success text.</div>
                  <div className="text-info">This is an example of info text.</div>
                  <div className="text-warning">This is an example of warning text.</div>
                  <div className="text-danger">This is an example of danger text.</div>
                  <div className="text-pink">This is an example of pink text.</div>
                </div>
                <div className="col-md-4 markdown">
                  <h3>Addresses</h3>
                  <address>
                    <strong>
                      Twitter, Inc. <br />
                    </strong>
                    1355 Market Street, Suite 900 <br />
                    San Francisco, CA 94103 <br />
                    <abbr title="Phone">P: </abbr>(123) 456 7890
                  </address>
                  <address>
                    <strong>
                      Full name <br />
                    </strong>
                    <a href="mailto:#">first.last@example.com</a>
                  </address>
                </div>
                <div className="col-md-4 markdown">
                  <h3>Typography</h3>
                  <div>
                    <h1>H1 Lorem ipsum dolor sit amet</h1>
                    <h2>H2 Lorem ipsum dolor sit amet</h2>
                    <h3>H3 Lorem ipsum dolor sit amet</h3>
                    <h4>H4 Lorem ipsum dolor sit amet</h4>
                    <h5>H5 Lorem ipsum dolor sit amet</h5>
                    <h6>H6 Lorem ipsum dolor sit amet</h6>
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
export default Typography;
