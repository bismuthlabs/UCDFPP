"use client"

import { useEffect, useState } from 'react';
import { db } from '@/app/firebase/config';
import { collection, getDocs, doc, updateDoc, getDoc } from 'firebase/firestore';

interface Reason {
  rank: number;
  id: string;
  reason: string;
  description: string;
  votes: {
    upvotes: {
      count: number;
    };
    downvotes: {
      count: number;
    };
  };
}

export default function Voting() {
  const [reasons, setReasons] = useState<Reason[]>([]);
  const [loading, setLoading] = useState(true); // Add the loading state

  useEffect(() => {
    // Function to fetch dissatisfaction data from Firestore
    const fetchDissatisfactionData = async () => {
      try {
        const dissatisfactionSnapshot = await getDocs(collection(db, 'dissatisfactions'));
        const dissatisfactionData:any = dissatisfactionSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Sort the reasons based on the number of upvotes in descending order
        dissatisfactionData.sort((a:any, b:any) => b.votes.upvotes.count - a.votes.upvotes.count);

        // Update the index (rank) of each reason in the sorted array
        const rankedReasons = dissatisfactionData.map((reason:string[], index:number) => ({
          ...reason,
          rank: index + 1,
        }));

        setReasons(rankedReasons);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching dissatisfaction data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    // Call the function to fetch data when the component mounts
    fetchDissatisfactionData();
  }, []);

  // Function to handle upvoting
  const handleUpvote = async (docId: string) => {
    try {
      // Check if the user has already upvoted or downvoted for this reason
      const userVotes = getUserVotes();
      if (userVotes[docId] === 'downvote') {
        // If the user previously downvoted, revert the downvote
        await revertDownvote(docId);
      } else if (!userVotes[docId]) {
        // If the user has not voted for this reason, proceed with the upvote
        const dissatisfactionRef = doc(db, 'dissatisfactions', docId);
        const dissatisfactionDoc = await getDoc(dissatisfactionRef);
        const currentUpvotes = dissatisfactionDoc.data()?.votes.upvotes.count || 0;
        const newUpvotes = currentUpvotes + 1;

        await updateDoc(dissatisfactionRef, {
          'votes.upvotes.count': newUpvotes,
        });

        // Save the user's vote in local storage
        setUserVote(docId, 'upvote');

        // Update the state to reflect the updated vote count
        updateVoteCount(docId, 'upvotes', newUpvotes);
      }
    } catch (error) {
      console.error('Error while handling upvote:', error);
    }
  };

  // Function to handle downvoting
  const handleDownvote = async (docId: string) => {
    try {
      // Check if the user has already upvoted or downvoted for this reason
      const userVotes = getUserVotes();
      if (userVotes[docId] === 'upvote') {
        // If the user previously upvoted, revert the upvote
        await revertUpvote(docId);
      } else if (!userVotes[docId]) {
        // If the user has not voted for this reason, proceed with the downvote
        const dissatisfactionRef = doc(db, 'dissatisfactions', docId);
        const dissatisfactionDoc = await getDoc(dissatisfactionRef);
        const currentDownvotes = dissatisfactionDoc.data()?.votes.downvotes.count || 0;
        const newDownvotes = currentDownvotes + 1;

        await updateDoc(dissatisfactionRef, {
          'votes.downvotes.count': newDownvotes,
        });

        // Save the user's vote in local storage
        setUserVote(docId, 'downvote');

        // Update the state to reflect the updated vote count
        updateVoteCount(docId, 'downvotes', newDownvotes);
      }
    } catch (error) {
      console.error('Error while handling downvote:', error);
    }
  };

  // Function to get the user's votes from local storage
  const getUserVotes = (): { [key: string]: string } => {
    const userVotesJSON = localStorage.getItem('userVotes');
    return userVotesJSON ? JSON.parse(userVotesJSON) : {};
  };

  // Function to save the user's vote in local storage
  const setUserVote = (docId: string, vote: 'upvote' | 'downvote') => {
    const userVotes = getUserVotes();
    userVotes[docId] = vote;
    localStorage.setItem('userVotes', JSON.stringify(userVotes));
  };

  // Function to revert the upvote for a specific reason
  const revertUpvote = async (docId: string) => {
    const dissatisfactionRef = doc(db, 'dissatisfactions', docId);
    const dissatisfactionDoc = await getDoc(dissatisfactionRef);
    const currentUpvotes = dissatisfactionDoc.data()?.votes.upvotes.count || 0;
    const newUpvotes = currentUpvotes - 1;

    await updateDoc(dissatisfactionRef, {
      'votes.upvotes.count': newUpvotes,
    });

    // Remove the user's vote from local storage
    removeUserVote(docId);

    // Update the state to reflect the updated vote count
    updateVoteCount(docId, 'upvotes', newUpvotes);
  };

  // Function to revert the downvote for a specific reason
  const revertDownvote = async (docId: string) => {
    const dissatisfactionRef = doc(db, 'dissatisfactions', docId);
    const dissatisfactionDoc = await getDoc(dissatisfactionRef);
    const currentDownvotes = dissatisfactionDoc.data()?.votes.downvotes.count || 0;
    const newDownvotes = currentDownvotes - 1;

    await updateDoc(dissatisfactionRef, {
      'votes.downvotes.count': newDownvotes,
    });

    // Remove the user's vote from local storage
    removeUserVote(docId);

    // Update the state to reflect the updated vote count
    updateVoteCount(docId, 'downvotes', newDownvotes);
  };

  // Function to remove the user's vote for a specific reason from local storage
  const removeUserVote = (docId: string) => {
    const userVotes = getUserVotes();
    delete userVotes[docId];
    localStorage.setItem('userVotes', JSON.stringify(userVotes));
  };

  // Function to update the vote count in the state
  const updateVoteCount = (docId: string, voteType: 'upvotes' | 'downvotes', count: number) => {
    setReasons(prevReasons => {
      const updatedReasons = prevReasons.map(reason => {
        if (reason.id === docId) {
          return {
            ...reason,
            votes: {
              ...reason.votes,
              [voteType]: { count },
            },
          };
        }
        return reason;
      });
      return updatedReasons;
    });
  };

  return (
    <>
     {loading ? ( // Display loading UI while data is being fetched
        <div className="text-center mt-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-2">Fetching data...</p>
        </div>
      ) : (
        reasons.map((reason) => (
        <div className="flex items-center" key={reason.id}>
          <p className='text-4xl'>
            {/* {reason.id} */}
            {reason.rank}
          </p>
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-base font-semibold`}>
              {reason.reason}
            </h2>
            <p className={`m-0 max-w-[60ch] text-sm text-gray-600`}>
              {reason.description}
            </p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className="flex flex-col gap-1 items-center">
            <button
                className={`flex items-center gap-1 ${
                  getUserVotes()[reason.id] === 'upvote' ? 'text-orange-500' : ''
                }`}
                onClick={() => handleUpvote(reason.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={getUserVotes()[reason.id] === 'upvote' ? 'currentColor' : 'none'}
                  stroke={getUserVotes()[reason.id] === 'upvote' ? 'currentColor' : 'currentColor'}
                >
                  <path fill="currentColor" d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601L17.919 12H15z"/></svg>
              </button>
              <button
                className={`flex items-center gap-1 ${
                  getUserVotes()[reason.id] === 'downvote' ? 'text-blue-500' : ''
                }`}
                onClick={() => handleDownvote(reason.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={getUserVotes()[reason.id] === 'downvote' ? 'currentColor' : 'none'}
                  stroke={getUserVotes()[reason.id] === 'downvote' ? 'currentColor' : 'currentColor'}
                >
                  <path fill="currentColor" d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059zM12 19.399L6.081 12H10V4h4v8h3.919L12 19.399z"/></svg>
              </button>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <p className={`text-sm ${getUserVotes()[reason.id] === 'upvote' ? 'text-orange-500' : ''}`}>
                {reason.votes.upvotes.count}
              </p>
              <p className={`text-sm ${getUserVotes()[reason.id] === 'downvote' ? 'text-blue-500' : ''}`}>{reason.votes.downvotes.count}</p>
            </div>
          </div>
        </div>
        ))
      )}
    </>
  );
}