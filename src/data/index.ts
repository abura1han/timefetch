import { CalendarData } from "@/app/types/calendar";
import { DATE_FORMAT } from "@/utils/calendar";
import moment from "moment";

export const avatarUrl =
  "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
export const coverImageUrl =
  "https://images.pexels.com/photos/371917/pexels-photo-371917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export const calendarData = [
  {
    id: "s_sssdxedff",
    startsAt: [moment().format(DATE_FORMAT), "08:10 PM"],
    endsAt: [moment().format(DATE_FORMAT), "10:00 PM"],
    logo: avatarUrl,
    coverImage: coverImageUrl,
    title: "Space Hub - Rewind solar system",
    description: "Some description",
    attachments: [],
    createdAt: "",
    updatedAt: "",
    createdBy: "",
    _version: 1,
    public: 1,
  },
  {
    id: "s_sssdxed233v",
    startsAt: [moment().format(DATE_FORMAT), "10:00 PM"],
    endsAt: [moment().format(DATE_FORMAT), "10:30 PM"],
    logo: avatarUrl,
    coverImage: coverImageUrl,
    title: "Space Hub - Rewind solar system",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis reprehenderit consequatur, consectetur aut eligendi fugiat nisi doloremque quisquam ducimus ipsa sit excepturi nesciunt dolores. Amet nostrum nisi nam ullam aperiam.",
    attachments: [],
    createdAt: "",
    updatedAt: "",
    createdBy: "",
    _version: 1,
    public: 1,
  },
  {
    id: "s_sssddf2ff",
    startsAt: [moment().format(DATE_FORMAT), "10:00 PM"],
    endsAt: [moment().format(DATE_FORMAT), "10:30 PM"],
    logo: avatarUrl,
    coverImage: coverImageUrl,
    title: "Space Hub - Rewind solar system",
    description: "Some description",
    attachments: [],
    createdAt: "",
    updatedAt: "",
    createdBy: "",
    _version: 1,
    public: 1,
  },
  {
    id: "s_sssdxedffr",
    startsAt: [moment().format(DATE_FORMAT), "10:00 PM"],
    endsAt: [moment().format(DATE_FORMAT), "10:30 PM"],
    logo: avatarUrl,
    coverImage: coverImageUrl,
    title: "Space Hub - Rewind solar system",
    description: "Some description",
    attachments: [],
    createdAt: "",
    updatedAt: "",
    createdBy: "",
    _version: 1,
    public: 1,
  },
  {
    id: "s_sssdxed233",
    startsAt: [moment().format(DATE_FORMAT), "10:00 PM"],
    endsAt: [moment().format(DATE_FORMAT), "10:00 PM"],
    logo: avatarUrl,
    coverImage: coverImageUrl,
    title: "Space Hub - Rewind solar system",
    description: "Some description",
    attachments: [],
    createdAt: "",
    updatedAt: "",
    createdBy: "",
    _version: 1,
    public: 1,
  },
  {
    id: "s_sssddf2ffj",
    startsAt: [moment().format(DATE_FORMAT), "10:00 PM"],
    endsAt: [moment().format(DATE_FORMAT), "10:00 PM"],
    logo: avatarUrl,
    coverImage: coverImageUrl,
    title: "Space Hub - Rewind solar system",
    description: "Some description",
    attachments: [],
    createdAt: "",
    updatedAt: "",
    createdBy: "",
    _version: 1,
    public: 1,
  },
] as CalendarData[];
