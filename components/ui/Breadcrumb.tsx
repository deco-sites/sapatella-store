import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { BreadcrumbList } from "deco-sites/std/commerce/types.ts";

interface Props {
  itemListElement: BreadcrumbList["itemListElement"];
}

function Item({ name, item }: { name?: string; item?: string }) {
  if (!name || !item) {
    return null;
  }

  return (
    <li class="whitespace-nowrap overflow-hidden overflow-ellipsis ">
      <a href={item} class="hover:underline">
        <Text variant="breadcrumb" tone="gray">
          {name}
        </Text>
      </a>
    </li>
  );
}

function Breadcrumb({ itemListElement = [] }: Props) {
  return (
    <ul class="flex flex-row gap-[10px] items-center justify-center w-full h-[19px]">
      <Item name="Home" item="/" />
      {itemListElement.map((item) => (
        <>
          <li class="text-[11px] leading-[19px] text-[gray]">
           |
          </li>
          <Item {...item} />
        </>
      ))}
    </ul>
  );
}

export default Breadcrumb;
