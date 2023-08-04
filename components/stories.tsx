import { useState } from "react"

export default function Stories() {
    const [visibleStories, setVisibleStories] = useState(4);

    const stories = [
        {
            id: 1,
            author: "anonymous",
            time: "3 hours ago",
            story: "I saw a nice looking suede (shoe) on Jumia. I love those kind of shoes, I even have about 7 different types and I always buy them at a boutique. This time, I decided to just try different place and online shopping sounds great. The shopping experience was good, the delivery was on time but the item... I screamed. The material was never what they described and it felt like it’s going to tear. It’s still with me and I could post the picture, but this is text only. I will try and send it to your WhatsApp number. From then, buying something online is a no no for me, lol."
        },
        {
            id: 2,
            author: "@alina",
            time: "3 hours ago",
            story: "For me, I don’t know if I am just unlucky or too soft but I always feel intimidated by the women in Kejetia, lol. For this reason, I rarely go there for shopping."
        },
        {
            id: 3,
            author: "@stacy",
            time: "3 hours ago",
            story: "My experiece on a fashion product I never liked is quiet an obvious one. It was my Mother who bought them. Her intention was to surprise me on my birthday. She told me she was convinced by the storekeeper and even some people around that I would like it. Well, I was grateful for my Mother’s intention but not so for the product itself."
        },
        {
            id: 4,
            author: "@afia",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.”? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
        },
        {
            id: 5,
            author: "@naasei",
            time: "3 hours ago",
            story: "I would like to deviate a little bit in answering the question - at least let’s consider the fact that I am a fashion designer. Often, people overlook their personal style and the potential to convey themselves through what they wear. Identifying your distinct style is vital for making informed fashion choices."
        },
        {
            id: 6,
            author: "adepa",
            time: "3 days ago",
            story: "I am a student at KNUST and my Mom owns a boutique shop at Adehye market so I sometimes witness some of these situations. I want to emphasize on the fact that “shop owners are intimidating”. Kejetia is a very competitive market, especially for fashion products. There are times, two days will go by and not even one person has entered the shop to even ask for a price - In such situation, if you happen to enter the shop, its either you buy willingly or she die trying to make you buy something. That’s what most people will consider as intimidating, but it’s the situation. I hope this helps your research. Thanks you!"
        },
    ]

    const handleSeeMore = () => {
        setVisibleStories(prevVisibleStories => prevVisibleStories + 4)
    }

    const handleCollapse = () => {
        setVisibleStories(4)
    }

    return (
        <>
      {stories.slice(0, visibleStories).map(story => (
        <div key={story.id} className="max-w-3xl border-b border-slate-300 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold ">{story.author}</h3>
            <p className="text-sm text-gray-600">{story.time}</p>
          </div>
          <p className="text-sm leading-6">{story.story}</p>
        </div>
      ))}

      {visibleStories < stories.length ? (
        <>
          <button
            className="underline text-blue-500"
            onClick={handleSeeMore}
          >
            See More
          </button>
          <button
            className="ml-4 hover:underline hover:underline-offset-4"
            onClick={handleCollapse}
          >
            Collapse
          </button>
        </>
      ) : (
        <button
          className="ml-4 hover:underline hover:underline-offset-4"
          onClick={handleCollapse}
        >
          Collapse
        </button>
      )}
    </>
    )
}