import { notFound } from "next/navigation";
import { WorkoutPlayer } from "@/components/workout-player";
import { getWorkoutById, workouts } from "@/lib/workouts";

export function generateStaticParams() {
  return workouts.map((workout) => ({ id: workout.id }));
}

export default async function PraticarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = getWorkoutById(id);
  if (!workout) notFound();
  return <WorkoutPlayer template={workout} />;
}
