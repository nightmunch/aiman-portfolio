import axios from "axios";
import { type NextApiRequest, type NextApiResponse } from "next";

const artstation = async (req: NextApiRequest, res: NextApiResponse) => {
    const url =
        "https://www.artstation.com/api/v2/search/projects.json?page=1&per_page=50&query=Harith Aiman";
    try {
        const { data: request } = await axios.get(url);
        const { data } = request;
        res.status(200).json(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data.filter((x: any) => x.user.username == "laminatedsquid")
        );
    } catch (error) {
        res.status(400).json(error);
    }
};

export default artstation;
