import WikiArticleViewer from "@/components/wiki-article-viewer";

interface ViewArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ViewArticlePage({
  params,
}: ViewArticlePageProps) {
  const { id } = await params;

  // Mock permission check - in a real app, this would come from auth/user context
  const canEdit = true; // Set to true for demonstration

  // Mock article data - in a real app, this would be fetched from an API
  const mockArticle = {
    id: +id,
    title: "Welcome to Watermelon",
    content: `# 

## Content
This is a sample article for the Watermelon wiki application. It demonstrates how to structure content using markdown, including headings, lists, links, and code blocks.

### Features
- **Markdown Support**: Write rich content with markdown syntax.
- **Author Attribution**: See who created the article and when.
- **Image Support**: Include images to enhance your articles.

`,
    author: "Admin User",
    createdAt: "2026-01-15",
    imageUrl: "/placeholder-image.svg", // Using SVG placeholder for demonstration
  };

  return <WikiArticleViewer article={mockArticle} canEdit={canEdit} />;
}
