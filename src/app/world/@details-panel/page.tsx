import DetailsPanelHeader from "@/components/headers/DetailsPanelHeader";
import { Button } from "@/components/ui/button";
import { calendarData } from "@/data";
import Image from "next/image";
import Link from "next/link";

const avatarUrl =
  "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Page = ({ searchParams }: { searchParams: Record<string, string> }) => {
  if (!Object.keys(searchParams).length) {
    return null;
  }

  const data = calendarData.find((item) => item.id === searchParams.event);

  if (!data) {
    return null;
  }

  return (
    <div className="w-96 bg-white pt-3 pr-4">
      <DetailsPanelHeader />

      <div className="mt-3">
        <div className="font-bold text-blue-800">{data.title}</div>
      </div>

      <div className="mt-3">
        <Image
          src={data?.coverImage}
          width={370}
          height={200}
          alt="Cover"
          className="w-full rounded-lg shadow"
        />
      </div>

      <div className="mt-3">
        <div className="font-bold text-blue-800 text-sm">Time</div>
        <div className="font-medium text-blue-800 text-sm">
          Starts at {data.startsAt[1]} - {data.startsAt[0]}
        </div>
        <div className="font-medium text-blue-800 text-sm">
          Ends at {data.endsAt[1]} - {data.endsAt[0]}
        </div>
      </div>
      <div className="mt-3 text-blue-800">
        <h2 className="font-bold text-sm">Description</h2>
        <p className="text-sm mt-2">{data.description}</p>
      </div>

      <div className="mt-3">
        <div className="font-bold text-blue-800 text-sm mb-2">Creator</div>
        <div className="flex gap-2">
          <Image src={avatarUrl} width={50} height={50} alt="Avatar url" />
          <div className="text-sm">
            <Link
              href={"/"}
              className="font-medium text-blue-800 hover:underline block"
            >
              Abu Raihan
            </Link>
            <Link
              href={"/"}
              className="font-medium text-blue-800 text-xs hover:underline block"
            >
              @abu
            </Link>
            <div className="mt-2">
              <Button size={"sm"} className="text-xs px-1 py-0 h-8 bg-blue-800">
                Follow
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="font-bold text-blue-800 text-sm">Tags</div>
        <div className="flex gap-2 mt-2 flex-wrap">
          {Array(6)
            .fill(1)
            .map((tag, index) => (
              <Link
                key={tag + index}
                href={"/"}
                className="text-xs rounded-md text-blue-800 p-0 underline font-medium"
              >
                #Topic some
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
