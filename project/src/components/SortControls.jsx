import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowDownAZ, ArrowUpAZ } from 'lucide-react';

export default function SortControls({ sortOrder, onSortChange }) {
  return (
    <Select value={sortOrder} onValueChange={onSortChange}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="newest">
          <div className="flex items-center gap-2">
            <ArrowDownAZ className="w-4 h-4" />
            <span>Newest First</span>
          </div>
        </SelectItem>
        <SelectItem value="oldest">
          <div className="flex items-center gap-2">
            <ArrowUpAZ className="w-4 h-4" />
            <span>Oldest First</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}