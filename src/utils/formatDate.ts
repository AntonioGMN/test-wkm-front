import dayjs from "dayjs";

export default function formatDate(date: string) {
	return dayjs(date).format("DD-MM-YYYY");
}
