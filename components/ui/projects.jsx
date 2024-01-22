import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


function Projects({title, desc, link}) {
  return (
    <Card className=' lg:w-[300px]'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardFooter>
        <a href={link}>
          <Button>Go</Button>
        </a>
      </CardFooter>
    </Card>
  );
}

export default Projects