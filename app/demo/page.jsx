"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#2b2bda",
        }}
      >
        {/* <Progress value={80} className="w-[60%] bg-red-600 " /> */}
        <Card className="w-[350px] border-cyan-700 bg-slate-100 ">
          <CardHeader>
            <CardTitle className="text-center mt-10">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Username">Username</Label>
                  <Input
                    id="Username"
                    placeholder="Username"
                    className="border border-cyan-700 focus:border-cyan-700"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Password">Password</Label>
                  <Input
                    id="Password"
                    placeholder="Password"
                    className="border border-cyan-700 focus:border-cyan-700"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button className="text-center mt-10">Submit</Button>
          </div>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
      </div>
    </>
  );
}
