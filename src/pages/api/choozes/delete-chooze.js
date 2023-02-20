import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from 'mongodb';

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("chooze_db");
        const { id } = req.query;

        const chooze = await db
            .collection("choozes")
            .deleteOne({
                '_id': ObjectId(id)
            })

        res.json(chooze);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};