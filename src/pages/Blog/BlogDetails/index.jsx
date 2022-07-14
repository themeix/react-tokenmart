import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import FooterV2 from "../../../components/Footer/FooterV2";
import Header from "../../../components/Header/Header";
import Categories from "./Categories";
import CommentForm from "./CommentForm";
import Popularposts from "./Popularposts";
import Tags from "./Tags";

const BlogDetails = () => {
  return (
    <div>
      <ScrollToTop smooth />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog Details || Tokenmart - Largest online marketplace</title>
      </Helmet>
      <Header />
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
            NFT Market – Big Benefits of Selling
          </h2>
          <ul className="hero-breadcrumb font-body text-blueGray-600 flex flex-wrap items-center">
            <li className="flex items-center mr-2">
              <Link
                className="transition duration-500 hover:text-indigo-500 underline-hover"
                to="/index"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center mr-2">
              <img
                className="w-3 h-3 inline-block mr-2"
                src="assets/images/right-arrow.svg"
                alt="title"
              />
              <Link
                className="transition duration-500 hover:text-indigo-500 underline-hover"
                to="/explore"
              >
                {" "}
                Explore
              </Link>
            </li>
            <li className="flex items-center text-indigo-500 mr-2">
              <img
                className="w-3 h-3 inline-block mr-2"
                src="assets/images/right-arrow.svg"
                alt="title"
              />
              NFT Market – Big Benefits of Selling
            </li>
          </ul>
        </div>
      </section>
      {/*  ====================== Blog Section =============================  */}
      <section className="blog-section mb-20 lg:mb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 xl:col-span-8">
              <figure>
                <img
                  className="w-full rounded"
                  src="assets/images/featured-image.jpg"
                  alt="title"
                />
              </figure>
              <div className="xl:flex items-center justify-between my-8">
                <div className="flex items-center relative my-6">
                  <div className="flex flex-wrap items-center mr-10">
                    <img
                      className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                      src="assets/images/author/3.jpg"
                      alt="title"
                    />
                    <div className="ml-2">
                      <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                        <Link to="/creator-published">Adams Smith</Link>
                      </h6>
                      <p className="font-body text-sm text-blueGray-600">
                        NFT Blogger
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                      src="assets/images/author/4.jpg"
                      alt="title"
                    />
                    <div className="ml-2">
                      <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                        <Link to="/creator-published">Jones Jay</Link>
                      </h6>
                      <p className="font-body text-sm text-blueGray-600">
                        NFT Blogger
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center relative my-6">
                  <div className="text-center lg:text-right">
                    <p className="block font-display text-blueGray-900 font-medium transition duration-500">
                      Published on
                    </p>
                    <p className="font-body text-blueGray-600">02 Feb 2021</p>
                  </div>
                  <div className="text-center lg:text-right ml-10">
                    <p className="block font-display text-blueGray-900 font-medium transition duration-500">
                      Last Updated
                    </p>
                    <p className="font-body text-blueGray-600">
                      02 Feb 2022 at 1:36 a.m. ET
                    </p>
                  </div>
                </div>
              </div>
              <div className="entry-content typofix mb-8 lg:mb-14">
                <p>
                  And its distance, scale was and I of mellower great. Recently
                  the contracting those what in however, chair. For to is except
                  notice to he first were to a its wonder progress voices my day
                  she were positives that the operations or way and her that
                  them. Good you interesting.Then service, gleaning many repeat
                  because of mars as his he'd you business versus it the have
                  move quarter cold a than essential check up in at meticulous
                  be the we day odd them merit around it's get harmonics. Pink
                  the have such to picture his of king's bright the funds
                  various his in concept sides and the seal to the bulk; To
                  else. Travelling, approached his understanding hologram a
                  king's coast by slogging to the transformed room. May help
                  family as a there to human employed a produce me. The follow
                  that considerations, a really have researches how gone.
                </p>
                <blockquote>
                  The medium of podcasting and the personal nature of it, the
                  relationship you build with your listeners and the
                  relationship they have with you—they could be chuckling and
                  listening…there’s nothing like that{" "}
                  <cite>
                    —{" "}
                    <Link to="/http://en.wikipedia.org/wiki/HAL_9000">
                      HAL 9000
                    </Link>
                  </cite>
                </blockquote>
                <p>
                  Case he a may of the found for the it sinking a is
                  self-interest. They the necessary to of been the there to by
                  he though, attribute instead, posts, of price strained of
                  create to embarrassed trade, lift calculus to have let room
                  sofas was belly, at and title make music. Literature sentences
                  my behind goodness. Initial thousand personalities nearby best
                  select because can before could it the enormity
                </p>
                <h4>NFT Market – A Compact Trike with the Big Benefits</h4>
                <p>
                  Assets named receive make continued would appearance, this he
                  there understand were the passion her by in our such, yourself
                  big didn't best pointing necessary it he bed throughout. It
                  why than raised as of for and founding not on bad the first me
                  refinement is it day of go. Duck the seal to lively.
                  Publication at the of accustomed. Self-interest, duck thousand
                  canvassing are them.
                </p>
                <Link
                  className="image-popup"
                  to="/assets/images/featured-image2.jpg"
                >
                  <img
                    className="lg:float-left mr-6 mb-2 w-full lg:max-w-sm"
                    src="assets/images/featured-image2.jpg"
                    alt="tile"
                  />
                </Link>
                <p>
                  Ticking from so, freshlybrewed then if, more there on.
                  Rendering remote kind as put gloomy may could may can at
                  relations the measures on effectiveness frequencies an of
                  surprise and do claim real from that introduced familiar
                  instruments, moment. Be I to founder, her and founded, at us,
                  small vices.
                </p>
                <p>
                  {" "}
                  Tag we hazardous the chequered fifteen because by
                  investigating indication evening. Set everything design stage
                  it yes, be said more doing even long sacred, obscurity, the
                  possible and confidence written not later phase belly payload
                  to treble-range must think out and the was first rationale at
                  briefs examples, in scent put a internet he help at upon
                  himself clothes, brown even multitude evening.
                </p>
                <p>
                  Was not by expected hearing.{" "}
                  <Link to="/index"> Events were his little the in comp</Link>{" "}
                  any even they the tend thousands our that have clarinet were
                  dedicated side this into one have determined from solitary had
                  better the concept phase gradually packed you his not, more
                  employed or the if different and furnished subjective tones
                  the candidates, a field customary remedies. As sad. Volumes if
                  up secure heard it surprise endeavours, however friends of
                  road, with right play. Wild have near of groundtem, of
                  appearance, ever arrives for all but we though page to was
                  vanished to schemes himself are officers its phase negatives.
                </p>
                <ul>
                  <li>
                    For embarkation the which how container of a she work, the
                    hitting your the I by goals
                  </li>
                  <li>Suspicious have ability assistant mountains</li>
                  <li>
                    Ticking from so, freshlybrewed then if, more there on.
                    Rendering remote kind as put gloomy may
                  </li>
                  <li>For embarkation the which how container of a she work</li>
                  <li>
                    Been the which to the tuned either maybe her in have
                    frequency, approved of infinity
                  </li>
                  <li>Frequency much its lazy cold</li>
                  <li>Turner. Man regurgitated less he</li>
                </ul>
                <p>
                  Designer; Could in which only versus in, officers are was
                  appeared the collection fresh table its around big countries
                  geared to nice equally but free in without. Any it's her from
                  poverty being because curiously, tone was appeared the both to
                  gm dragged in up can and on their know.
                </p>
              </div>
              <div className="entry-footer flex flex-wrap lg:flex-nowrap items-center justify-between border-b border-t border-blueGray-300 py-4 mb-8 lg:mb-14">
                <div className="flex flex-wrap items-center">
                  <h4 className="font-display text-blueGray-600 font-bold mr-2">
                    Tags:
                  </h4>
                  <Link
                    to="/tag"
                    className="btn block text-white font-body rounded py-2 px-4 mr-2 my-1 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                  >
                    Auction
                  </Link>
                  <Link
                    to="/tag"
                    className="btn block text-white font-body rounded py-2 px-4 mr-2 my-1 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                  >
                    Creator
                  </Link>
                  <Link
                    to="/tag"
                    className="btn block text-white font-body rounded py-2 px-4 mr-2 my-1 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                  >
                    Marketplace
                  </Link>
                </div>
                <div className="social-share flex items-center">
                  <Link
                    className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2"
                    to="/https://www.facebook.com/"
                    target="_blank"
                  >
                    <img
                      className="w-4 h-4"
                      src="assets/images/facebook-icon.svg"
                      alt="title"
                    />
                  </Link>
                  <Link
                    className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2"
                    to="/https://www.twitter.com/"
                    target="_blank"
                  >
                    <img
                      className="w-4 h-4"
                      src="assets/images/twitter-icon.svg"
                      alt="title"
                    />
                  </Link>
                  <Link
                    className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2"
                    to="/https://www.instagram.com/"
                    target="_blank"
                  >
                    <img
                      className="w-4 h-4"
                      src="assets/images/instagram-icon.svg"
                      alt="title"
                    />
                  </Link>
                  <Link
                    className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2"
                    to="/https://www.linkedin.com/"
                    target="_blank"
                  >
                    <img
                      className="w-4 h-4"
                      src="assets/images/linkein-icon.svg"
                      alt="title"
                    />
                  </Link>
                </div>
              </div>
              <div className="entry-author bg-white rounded shadow transition duration-500 hover:shadow-lg flex justify-between px-6 py-12 mb-8 lg:mb-14">
                <img
                  className="w-16 h-16 lg:w-28 lg:h-28 object-cover rounded-full"
                  src="assets/images/author/3.jpg"
                  alt="title"
                />
                <div className="pl-6">
                  <h4 className="font-display text-xl text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                    <Link to="/creator-published">Robert Mill</Link>
                  </h4>
                  <p className="font-body text-blueGray-600 mt-2">
                    I was born in Kansas, and like little Ellie, I always
                    dreamed that a hurricane would take me ipsum somewhere to
                    another country. And once I really ended up in another
                    country - in China, to take studying at a business school.
                  </p>
                </div>
              </div>
              <div className="entry-comment  bg-white rounded shadow transition duration-500 hover:shadow-lg p-6 mb-6">
                <p className="font-body typofix text-blueGray-600">
                  Been as big couldn't teacher's replied affects especially
                  evaluate best at the retired, have be circumstances. Client
                  intended multitude Separated both they or a into at be but
                  improve small indication instruments, and weary the lack time
                  trying. Phase absolutely is values, life And assumed one in
                  for conduct, gave of and the history by frequency; Emerged.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center mt-2">
                    <img
                      className="border-2 border-white w-8 h-8 object-cover rounded-lg"
                      src="assets/images/author/4.jpg"
                      alt="title"
                    />
                    <div className="ml-2">
                      <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                        <Link to="/creator-published">Steven Robart</Link>
                      </h6>
                    </div>
                  </div>
                  <Link
                    className="readmore-btn font-display font-semibold text-blueGray-900 transition duration-500 hover:text-indigo-500 mt-2"
                    to="/single"
                  >
                    Reply
                    <img
                      className="grayscale inline-block w-4 ml-2"
                      src="assets/images/reply-icon.svg"
                      alt="title"
                    />
                  </Link>
                </div>
              </div>
              <div className="entry-comment bg-white rounded shadow transition duration-500 hover:shadow-lg p-6 mb-6 lg:ml-12">
                <p className="font-body typofix text-blueGray-600">
                  Is nature, listen. Felt me. Tones it could attempt. Who like
                  the doctor many was are to encouraged room. Feedback
                  accordingly what entrance that fate how at represent and
                  publication easier step and or that one hesitated italic the
                  we lively. Fur son, schemes
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center mt-2">
                    <img
                      className="border-2 border-white w-8 h-8 object-cover rounded-lg"
                      src="assets/images/author/5.jpg"
                      alt="title"
                    />
                    <div className="ml-2">
                      <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                        <Link to="/creator-published">Kristin Watson</Link>
                      </h6>
                    </div>
                  </div>
                  <Link
                    className="readmore-btn font-display font-semibold text-blueGray-900 transition duration-500 hover:text-indigo-500 mt-2"
                    to="/single"
                  >
                    Reply
                    <img
                      className="grayscale inline-block w-4 ml-2"
                      src="assets/images/reply-icon.svg"
                      alt="title"
                    />
                  </Link>
                </div>
              </div>
              <div className="entry-comment bg-white rounded shadow transition duration-500 hover:shadow-lg p-6 mb-6 lg:ml-12">
                <p className="font-body  typofix text-blueGray-600">
                  Designer; Could in which only versus in, officers are was
                  appeared the collection fresh table its around big countries
                  geared to nice equally but free in without. Any it's her from
                  poverty being because curiously, tone was appeared the both to
                  gm dragged in up can and on their kno
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center mt-2">
                    <img
                      className="border-2 border-white w-8 h-8 object-cover rounded-lg"
                      src="assets/images/author/6.jpg"
                      alt="title"
                    />
                    <div className="ml-2">
                      <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                        <Link to="/creator-published">Devon Lane</Link>
                      </h6>
                    </div>
                  </div>
                  <Link
                    className="readmore-btn font-display font-semibold text-blueGray-900 transition duration-500 hover:text-indigo-500 mt-2"
                    to="/single"
                  >
                    Reply
                    <img
                      className="grayscale inline-block w-4 ml-2"
                      src="assets/images/reply-icon.svg"
                      alt="title"
                    />
                  </Link>
                </div>
              </div>
              <div className="entry-comment bg-white rounded shadow transition duration-500 hover:shadow-lg p-6 mb-8 lg:mb-14">
                <p className="font-body typofix text-blueGray-600">
                  Proposal. Proceeded to salesmen the implemented aged create
                  subjective you you'd fame, in flatter maybe frequencies on
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center mt-2">
                    <img
                      className="border-2 border-white w-8 h-8 object-cover rounded-lg"
                      src="assets/images/author/7.jpg"
                      alt="title"
                    />
                    <div className="ml-2">
                      <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                        <Link to="/creator-published">Jerome Bell</Link>
                      </h6>
                    </div>
                  </div>
                  <Link
                    className="readmore-btn font-display font-semibold text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover mt-2"
                    to="/single"
                  >
                    Reply
                    <img
                      className="grayscale inline-block w-4 ml-2"
                      src="assets/images/reply-icon.svg"
                      alt="title"
                    />
                  </Link>
                </div>
              </div>
              <div className="entry-navigation lg:flex items-center justify-between mb-8 lg:mb-10">
                <div className="lg:text-left lg:max-w-sm my-4 lg:mr-6">
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                    <Link to="/ Liki Trike – A Compact Trike with the Big Benefits">
                      Liki Trike – A Compact Trike with the Big Benefits
                    </Link>
                  </h3>
                  <p className="mt-4">
                    <Link
                      className="readmore-btn font-display text-sm text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover mt-2"
                      to="/  Liki Trike – A Compact Trike with the Big Benefits"
                    >
                      <img
                        className="grayscale inline-block -rotate-180 w-4 mr-2"
                        src="assets/images/reply-icon.svg"
                        alt="title"
                      />{" "}
                      Previous Post
                    </Link>
                  </p>
                </div>
                <div className="lg:text-right lg:max-w-sm my-4 lg:ml-6">
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                    <Link to="/      The Revolutionary Functionality of the Doona Car Seat
                      &amp; Stroller">
                      The Revolutionary Functionality of the Doona Car Seat
                      &amp; Stroller
                    </Link>
                  </h3>
                  <p className="mt-4">
                    <Link
                      className="readmore-btn font-display text-sm text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover mt-2"
                      to="/ The Revolutionary Functionality of the Doona Car Seat
                      &amp; Stroller"
                    >
                      {" "}
                      Next Post{" "}
                      <img
                        className="grayscale inline-block w-4 ml-2"
                        src="assets/images/reply-icon.svg"
                        alt="title"
                      />
                    </Link>
                  </p>
                </div>
              </div>
              <CommentForm />
            </div>
            <div className="lg:col-span-5 xl:col-span-4">
              <div
                className="bg-white rounded border border-blueGray-300 transition duration-500 hover:shadow-lg px-6 py-8 mb-14"
                data-aos="fade-up"
              >
                <h3 className="font-display text-3xl text-blueGray-900 font-bold mb-6">
                  Search{" "}
                </h3>
                <form action="#">
                  <div className="relative">
                    <input
                      className="border border-blueGray-300 rounded w-full px-4 py-3 pr-10 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
                      type="text"
                      placeholder="Serch here..."
                    />
                    <button
                      type="submit"
                      className="block absolute bottom-3 right-4"
                    >
                      <img
                        className="w-5 h-5 inline-block ml-2 mb-1"
                        src="assets/images/search-icon2.svg"
                        alt="title"
                      />
                    </button>
                  </div>
                </form>
              </div>
              <Categories />
              <Tags />
              <Popularposts />
            </div>
          </div>
        </div>
      </section>
      <FooterV2 />
    </div>
  );
};

export default BlogDetails;
