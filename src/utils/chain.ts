export const chainTitle = (data: any) => (data?.title && data.title.split(' ').length < 2 ? data.title : data?.short_name);
