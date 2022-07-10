import React from 'react';
import { Layout } from '../layouts';
import { Card } from '../components';
import { MamaRecipe } from '../assets';

const Projects = () => {
  return (
    <Layout>
      <main className="container mx-auto max-width pt-10 mb-20 mt-10">
        <section>
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            Projects
          </h1>
          <p className="text-xl text-dark-content md:text-1xl xl:text-2xl py-2">
            Things I&apos;ve built so far
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
            <Card
              title="Mama Recipe"
              image={MamaRecipe}
              description="Mama Recipe is here to help you cook delicious and simple meals."
              techstack="React, CSS"
              previewLink="https://mama-recipe.vercel.app/"
              githubLink="https://github.com/altrawan/mama-recipe-app"
            />
            <Card
              title="Mama Recipe"
              image={MamaRecipe}
              description="Mama Recipe is here to help you cook delicious and simple meals."
              techstack="React, CSS"
              previewLink="https://mama-recipe.vercel.app/"
              githubLink="https://github.com/altrawan/mama-recipe-app"
            />
            <Card
              title="Mama Recipe"
              image={MamaRecipe}
              description="Mama Recipe is here to help you cook delicious and simple meals."
              techstack="React, CSS"
              previewLink="https://mama-recipe.vercel.app/"
              githubLink="https://github.com/altrawan/mama-recipe-app"
            />
            <Card
              title="Mama Recipe"
              image={MamaRecipe}
              description="Mama Recipe is here to help you cook delicious and simple meals."
              techstack="React, CSS"
              previewLink="https://mama-recipe.vercel.app/"
              githubLink="https://github.com/altrawan/mama-recipe-app"
            />
            <Card
              title="Mama Recipe"
              image={MamaRecipe}
              description="Mama Recipe is here to help you cook delicious and simple meals."
              techstack="React, CSS"
              previewLink="https://mama-recipe.vercel.app/"
              githubLink="https://github.com/altrawan/mama-recipe-app"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Projects;
