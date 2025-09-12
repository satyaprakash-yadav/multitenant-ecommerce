import { Suspense } from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getQueryClient, trpc } from "@/trpc/server";

import { ProudctView, ProudctViewSkeleton } from "@/modules/library/ui/views/product-view";

export const dynamic = "force-dynamic";

interface Props {
    params: Promise<{
        productId: string;
    }>;
};

const Page = async ({ params }: Props) => {
    const { productId } = await params;

    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.library.getOne.queryOptions({
        productId,
    }));

    void queryClient.prefetchQuery(trpc.reviews.getOne.queryOptions({
        productId,
    }));

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<ProudctViewSkeleton />}>
                <ProudctView productId={productId} />
            </Suspense>
        </HydrationBoundary>
    );
};

export default Page;
