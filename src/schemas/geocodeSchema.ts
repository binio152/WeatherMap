import { z } from "zod";

export const GeocodeSchema = z.object({
  country: z.string(),
  local_names: z.record(z.string(), z.string()).optional(),
  name: z.string(),
  lat: z.number(),
  lon: z.number(),
  state: z.string().optional(),
});

export const GeocodeResponseSchema = z.array(GeocodeSchema);

export type Geocode = z.infer<typeof GeocodeSchema>;
export type GeocodeResponse = z.infer<typeof GeocodeResponseSchema>;
