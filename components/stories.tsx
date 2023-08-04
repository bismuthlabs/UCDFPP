import { useState } from "react"

export default function Stories() {
    const [visibleStories, setVisibleStories] = useState(4);

    const stories = [
        {
            id: 1,
            author: "Alina",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.” ? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
        },
        {
            id: 2,
            author: "Alina",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.” ? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
        },
        {
            id: 3,
            author: "Alina",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.” ? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
        },
        {
            id: 4,
            author: "Alina",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.” ? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
        },
        {
            id: 5,
            author: "Alina",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.” ? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
        },
        {
            id: 6,
            author: "Alina",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.” ? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
        },
        {
            id: 7,
            author: "Alina",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.” ? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
        },
        {
            id: 8,
            author: "Alina",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.” ? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
        },
        {
            id: 9,
            author: "Alina",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.” ? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
        },
        {
            id: 10,
            author: "Alina",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.” ? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
        },
        {
            id: 11,
            author: "Alina",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.” ? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
        },
        {
            id: 12,
            author: "Alina",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.” ? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
        },
        {
            id: 13,
            author: "Alina",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.” ? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
        },
        {
            id: 14,
            author: "Alina",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.” ? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
        },
        {
            id: 15,
            author: "Alina",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.” ? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
        },
        {
            id: 16,
            author: "Alina",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.” ? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
        },
        {
            id: 17,
            author: "Alina",
            time: "3 hours ago",
            story: "I went to Kejetia to buy an outfit for a special church occasion. I didn’t have a specific thing in mind or even a picture to show. I just wanted something great to wear. I entered this shop at Adum and I reeeaaalllly regret going there. I greeted the woman and the first word from her mouth was, “wo pɛ deɛn.” ? The tone of her voice and the no-smile look she gave me, my spirit was down already. I don’t know what happened to my instinct of choice, but I never liked the product I bought. I feel like, I would’ve bought something better if she had been a little friendly with me."
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