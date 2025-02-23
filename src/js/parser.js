// Parses JSON structure to Markdown for Docsify Sidebar
// Useful when loading from JSON

// Function to parse and format the data
export function parseData(data) {
  const folders = {};
  
  data.forEach(item => {
      if (item.folder) {
          if (!folders[item.folder]) {
              folders[item.folder] = [];
          }
          folders[item.folder].push(`  - [${item.title}](${item.link})`);
      } else {
          if (!folders['Introduction']) {
              folders['Introduction'] = [];
          }
          folders['Introduction'].push(`- [${item.title}](${item.link})`);
      }
  });

  let output = Object.entries(folders).map(([folder, items]) => {
      if (folder === 'Introduction') {
          return items.join('\n');
      } else {
          const formattedFolder = folder.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
          return `- **${formattedFolder}**\n${items.join('\n')}`;
      }
  }).join('\n');

  return output;
}
