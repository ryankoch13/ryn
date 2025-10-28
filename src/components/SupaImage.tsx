import { useSupabase } from "@/providers/SupabaseProvider";
import { useQuery } from "@tanstack/react-query";
import { Image, ImageProps } from "react-native";

type SupaImageProps = {
    path: string;
} & ImageProps

export default function SupaImage({path, ...imageProps}: SupaImageProps) {

    const supabase = useSupabase()

    const {data} = useQuery({
        queryKey: ['supa-image', path],
        queryFn: async () => {
            const {data} = supabase.storage.from('images'
            ).getPublicUrl(path)

            return data.publicUrl
        },
    })
    return (
        <Image {...imageProps} source={{uri: data}} />
    )
}