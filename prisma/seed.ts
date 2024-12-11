import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 사용자 데이터 생성
  const alice = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
    },
  });

  const bob = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@example.com',
    },
  });

  // 게시물과 댓글 생성
  const post1 = await prisma.post.create({
    data: {
      title: "Alice's First Post",
      content: "This is Alice's first post.",
      authorId: alice.id, 
      comments: {
        create: [
          {
            content: 'Great post!',
            authorId: bob.id, 
          },
          {
            content: 'Thanks for sharing!',
            authorId: bob.id, 
          },
        ],
      },
    },
  });

  const post2 = await prisma.post.create({
    data: {
      title: "Bob's Thoughts",
      content: "Bob's insights about Prisma.",
      authorId: bob.id, 
    },
  });

  console.log({ alice, bob, post1, post2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
