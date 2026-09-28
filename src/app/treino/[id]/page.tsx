import { notFound } from "next/navigation";
import { WorkoutDetail } from "@/components/workout-detail";
import { getWorkoutById, workouts } from "@/lib/workouts";

export function generateStaticParams() {
  return workouts.map((workout) => ({ id: workout.id }));
}

export default async function WorkoutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = getWorkoutById(id);
  if (!workout) notFound();
  return <WorkoutDetail template={workout} />;
}
