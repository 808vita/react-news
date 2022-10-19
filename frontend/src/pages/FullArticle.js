//requires protection
//detailed article

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ComponentFullArticle from "../components/ComponentFullArticle";

const title = `Thanks for your kind words’: GigaChad finally responds to the memes`;
const image = "article0";
const author = "author1";
const content = `Yes, he’s a real person. Yes, he’s noticed the “GigaChad” memes and he’s finally opened up about his internet fame

The “GigaChad” meme emerged back in 2017. It was initially coined as an archetype on 4chan, referring to a guy who is considered to be the model of idealized hypermasculinity. The term became popular in a lot of incel (involuntary celibate) communities. The meme emerged from the @sleekntears Instagram page that was linked by an anonymous Redditor in a subreddit about bodybuilding.

GigaChad

The identity of the guy in the “GigaChad” meme has been a mystery for a while. Some people were even debating if the guy was a real person or if he was a CGI model someone made. The guy didn’t really have much internet presence so it was hard to tell if he was real, or whether or not the photos were just Photoshopped. He declined interviews and refused to comment on the memes.

That is, until he finally opened up about the memes around two weeks ago. So, who is this guy, and what does he think of all the “GigaChad” memes that have made him popular? 

“GigaChad” (also known as “Average Enjoyer”) is Russian menswear model and bodybuilder Ernest Khalimov. Aside from the “GigaChad” memes, he isn’t very well-known. Even in the “Sleek’N’Tears” project, he was exclusively known as “1969,” so it’s fair that a lot of people are surprised to hear that he’s a real person.

Khalimov recently posted on his Instagram account berlin.1969 about the “GigaChad” memes. The Russian model and bodybuilder was very flattered and responded very humbly to the comments and the memes. He said on his post, “Thanks for your kind words. Thank you for the positive energy, don’t doubt guys I mentally return it to you.” 

It’s hard to say if Khalimov will continue interacting with the comments and memes, but he ended his post with, “Yours faithfully, Average person.”   `;

const FullArticle = () => {
  const { isVerified, isAuth } = useSelector((state) => state.user);
  const params = useParams();
  console.log(params);
  if (!isAuth) {
    return (
      <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
        <p className="fs-5">please Login!</p>
      </div>
    );
  } else if (isAuth && !isVerified) {
    return (
      <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
        <p className="fs-5">Please verify your email to read the article!</p>
      </div>
    );
  } else if (isAuth && isVerified) {
    return (
      <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
        <div
          className="d-flex flex-wrap flex-column align-items-center justify-content-center"
          style={{ maxWidth: "1400px" }}
        >
          <ComponentFullArticle
            title={title}
            image={image}
            author={author}
            content={content}
            id={params?.id}
          />
        </div>
      </div>
    );
  }
};

export default FullArticle;
