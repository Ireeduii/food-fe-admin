"use client";
import { AdminLayout } from "@/components/AdminLayout";
import { CategorizedFoods } from "@/components/CategorizedFoods";
import { Categories } from "@/";
import { Skeleton } from "@/components/ui/skeleton";
import { useFood } from "../_hooks/use-food";

export default function Page() {
  const { loading, categories, foods, reFetchCategories, reFetchFoods } =
    useFood();

  return (
    <AdminLayout>
      <div className="bg-gray-100 h-full">
        {loading ? (
          <div className="flex gap-2">
            {[1, 2, 3].map((c) => (
              <Skeleton
                key={c}
                className="flex items-center border-2 rounded-full p-2 py-0 h-7 w-25"
              />
            ))}
          </div>
        ) : (
          <Categories
            categories={categories}
            getCategories={reFetchCategories}
          />
        )}
        {categories.map((category) => {
          return (
            <CategorizedFoods
              key={category._id}
              refetchFoods={() => reFetchFoods()}
              foods={foods.filter(
                (food) => food.categoryId._id == category._id
              )}
              category={category}
            />
          );
        })}
      </div>
    </AdminLayout>
  );
}
