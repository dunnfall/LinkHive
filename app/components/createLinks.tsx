"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import CreateLinkForm from "@/components/link/createForm";
import {
  Container,
  Button as FloatingButton,
} from "react-floating-action-button";
import { Plus } from "lucide-react";

export function CreateLinkButton() {
  const formId = "create-link-form";
  const [open, setOpen] = useState(false);
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div>
            <Container>
              <Button variant="outline" className="rounded-full">
                <Plus className="text-muted-foreground" />
              </Button>
            </Container>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Link</DialogTitle>
          </DialogHeader>
          <CreateLinkForm formId={formId} open={open} setOpen={setOpen} />
          <DialogFooter>
            <Button type="submit" form={formId}>
              Create Link
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
