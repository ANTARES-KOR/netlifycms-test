function parseYoutubeVideoId(url) {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export const YoutubeEmbedEditor = {
  id: "youtube-video",
  label: "Embed Youtube",
  fields: [
    {
      name: "link",
      label: "유튜브 동영상 링크",
      widget: "string",
    },
  ],
  pattern: /```mdx-code-block\n.*\n*<ReactPlayer.*url="(.*?)".*\/>\n```/ms,
  fromBlock: function (match) {
    return {
      link: match[1],
    };
  },
  toBlock: function (data) {
    return `
            \`\`\`mdx-code-block
              import ReactPlayer from 'react-player';
            
              <ReactPlayer url="${data.link}" />
            \`\`\`
          `;
  },
  toPreview: function (data) {
    const videoId = parseYoutubeVideoId(data.link);
    console.log(videoId);
    return `
            <div style="width: 640px; height:360px;" >
              <iframe
                frameborder="0"
                allowfullscreen="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/${videoId}?autoplay=0&amp;mute=0&amp;controls=0&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"
                id="widget2"
              ></iframe>
            </div>
            `;
  },
};
