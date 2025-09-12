import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { LibraryView } from "@/modules/library/ui/views/library-view";
import { getQueryClient, trpc } from "@/trpc/server";

import { DEFAULT_LIMIT } from "@/constants";

export const dynamic = "force-dynamic";

const Page = async () => {
    const queryClient = getQueryClient();
    void queryClient.prefetchInfiniteQuery(trpc.library.getMany.infiniteQueryOptions({
        limit: DEFAULT_LIMIT,
    }));

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <LibraryView />
        </HydrationBoundary>
    );
};
 
export default Page;
