# Product API – Endpoint Documentation (Prompt 1)

## GET /products

### Description
Retrieves a list of products with optional filtering, sorting, and pagination.

---

### Query Parameters

| Parameter | Type | Required | Description |
|------------|--------|------------|--------------|
| category | string | No | Filter by product category |
| minPrice | number | No | Minimum price filter |
| maxPrice | number | No | Maximum price filter |
| sort | string | No | Field to sort by (default: createdAt) |
| order | string | No | Sort order (asc or desc, default: desc) |
| page | number | No | Page number (default: 1) |
| limit | number | No | Results per page (default: 20) |
| inStock | boolean | No | If true, return only products in stock |

---

### Success Response (200)

```json
{
  "products": [
    {
      "_id": "65fa12ab45cd678901234567",
      "name": "Wireless Headphones",
      "category": "electronics",
      "price": 120.99,
      "stockQuantity": 15,
      "createdAt": "2026-02-20T10:00:00.000Z"
    }
  ],
  "pagination": {
    "total": 150,
    "page": 1,
    "limit": 20,
    "pages": 8
  }
}