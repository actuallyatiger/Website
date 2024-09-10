import { TileSet } from "@/app/lib/declarations";

export default function Tiles(props: { tileset: TileSet }) {
  const { title, tiles } = props.tileset as TileSet;
  return (
    <div className="flex flex-col items-center gap-3 max-w-[80%]">
      <h3 className="font-semibold text-3xl">{title}</h3>
      <div className="flex flex-wrap justify-center gap-4 ">
        {tiles.map((tile) => (
          <a
            key={tile.name}
            href={tile.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tile.name}
            dangerouslySetInnerHTML={{
              __html: tile.icon.replace(
                /<title>.*<\/title>/,
                `<title>${tile.name}</title>`,
              ),
            }}
            className="size-fit *:h-12 *:w-12 sm:*:h-14 sm:*:w-14 p-2 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30 border-2 border-white border-opacity-30 hover:border-opacity-50 fill-white transition-all duration-200 hover:cursor-pointer"
          ></a>
        ))}
      </div>
    </div>
  );
}
