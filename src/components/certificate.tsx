import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CertificateProps {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  link?: string;
  tags?: readonly string[];
  className?: string;
}

export function CertificateCard({
  title,
  issuer,
  date,
  image,
  link,
  tags,
  className,
}: CertificateProps) {
  return (
    <Card className={cn("flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full", className)}>
      {image && (
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="h-40 w-full object-cover object-top"
        />
      )}
      <CardHeader className="px-2">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{issuer}</p>
        <time className="text-xs text-muted-foreground">{date}</time>
      </CardHeader>
      <CardContent className="px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} className="px-1 py-0 text-[10px]" variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      {link && (
        <CardFooter className="px-2 pb-2">
           <Link href={link}  target="_blank">
                <Badge  className="flex gap-2 px-2 py-1 text-[10px]">
                  
                Certificate
                </Badge>
              </Link>
        </CardFooter>
      )}
    </Card>
  );
}
