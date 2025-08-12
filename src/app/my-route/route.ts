import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: "categories", //https://dev.to/krixnaas/payload-generatetypes-throwing-error-promises-3a7j
  });
  
  return Response.json(data);
}
