"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
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
import DatePicker from "./DatePicker";
import Image from "next/image";
import QualityCheckTable from "@/components/QualityCheckTable";
import ActionButton from "./ActionButton";
import HidroReport from "./hidroReport";

export function QualityForm() {
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <div className="flex flex-col items-center py-6 text-sm">
          <Image
            width={135}
            height={36}
            src="/images/logo.png"
            alt="Enterprise logo"
          />
        </div>

        <CardTitle>Criar Relatório</CardTitle>
        <CardDescription>Relatório de inspeção de Qualidade.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Código do Relatório</Label>
            <Input
              className="shadow-xs shadow-amber-200"
              id="name"
              placeholder="Código do Relatório"
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="client">Cliente</Label>
            <Input
              className="shadow-xs shadow-amber-200"
              id="client"
              placeholder="Razão Social"
            />
          </div>

          <DatePicker />

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="Equipamentos">
              Família de Equipamentos
            </Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Select" />
              </SelectTrigger>

              <SelectContent position="popper">
                <SelectItem value="Placa magnetica">
                  Placa Magnética
                </SelectItem>
                <SelectItem value="Bastao magnetico">
                  Bastão Magnético
                </SelectItem>
                <SelectItem value="Filtro magnetico">
                  Filtro Magnético
                </SelectItem>
                <SelectItem value="Polia magnetica">
                  Polia Magnética
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <QualityCheckTable />

        <HidroReport />

        <ActionButton />


      </CardContent>
    </Card>
  );
}
