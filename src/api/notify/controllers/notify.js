// @ts-nocheck
module.exports = {
  async create(ctx) {
    if (ctx.request.body.model === "gdpr-knowledge-base") {
      // Fetch users interested in this category
      const interestedUsers = await strapi.entityService.findMany(
        "plugin::users-permissions.user",
        {
          filters: {
            category: ctx.request.body.entry.catergory,
          },
        }
      );
      // Send email to each user
      for (const user of interestedUsers) {
        strapi.plugins["email"].services.email.send({
          to: user.email,
          from: "latanadeitopi@outlook.it",
          subject: "New  Update",
          text: "A New blog you are interested in has been created!",
        });
      }
    }

    return ctx.send({ message: "Emails sent successfully!" });
  },
};