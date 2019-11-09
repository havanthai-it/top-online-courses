/**
 * Convert from list of categories to list of tags
 */
export const categoryArrayToTagArray = (categories) => {
  const tags = [];
  categories.forEach((cat) => {
    cat.topics.forEach((topic) => {
      topic.tags.forEach((tag) => {
        tags.push({
          category: cat.name,
          topic: topic.name,
          tag: tag.name
        });
      })
    });
  });
  return tags;
}
