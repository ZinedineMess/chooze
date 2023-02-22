import clientPromise from "../../../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("chooze_db");
        const { question, responses, voters, voteLink, totalVotes, resultsLink, backgroundImageUrl } = req.body;


        const chooze = await db
            .collection("choozes")
            .insertOne({
                question, 
                responses, 
                voters, 
                voteLink, 
                totalVotes, 
                resultsLink,
                backgroundImageUrl
            });

        res.json(chooze);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};