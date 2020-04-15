export const ProductTileFragment = `
  fragment ProductTile on Product {
    id
    name
    price
    price_incl_tax
    media_gallery {
      image
      label
    }
    stock {
      qty
    }
  }
`;

export const ProductFragment = `
  fragment ProductFragment on Product {
    id
    sku
    description
    short_description
    price
    price_incl_tax
    name
    manufacturer
    meta_title
    meta_keyword
    meta_description
    media_gallery {
      image
      label
    }
    stock {
      is_in_stock
      qty
      backorders
      max_sale_qty
    }
    reviews {
      items {
        nickname
        created_at
        detail
      }
    }
  }
`;
