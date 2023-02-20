import clientPromise from "../../../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("chooze_db");

        const choozes = await db
            .collection("choozes")
            .find({})
            .limit(20)
            .toArray();

        res.json(choozes);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};