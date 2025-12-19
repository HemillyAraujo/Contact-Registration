import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
    // CREATE
    const contact = await prisma.contact.create({
        data: {
            name: 'Hemilly',
            email: 'teste@gmail.com',
            phone: 999999999,
        },
    });
    console.log('Created user:', contact);

    // READ
    const allUsers = await prisma.contact.findMany({ select: { id: true, name: true, email: true, phone: true } });
    console.log('\nAll contacts:');
    console.log(JSON.stringify(allUsers, null, 2));

    // UPDATE
    const updatedUser = await prisma.contact.update({
        where: { email: 'teste@gmail.com' },
        data: { name: 'Hemilly' },
    });
    console.log('\nUpdated contact:', updatedUser);

    // DELETE
    const deletedContact = await prisma.contact.delete({
        where: { id: contact.id },
    });
    console.log('\nDeleted contact:', deletedContact);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });