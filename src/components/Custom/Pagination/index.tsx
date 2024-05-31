import { Pagination } from "react-bootstrap";
import { useQueryParams } from "~/hooks";

const DynaPagination = ({
  pagination,
  firstLastVisible = false,
  size,
}: {
  pagination: {
    currentPage: number;
    totalCount: number;
    totalPages: number;
    pageSize: number;
  };
  firstLastVisible?: boolean;
  size?: "sm" | "lg";
}) => {
  const [page, setPage] = useQueryParams("page");

  const getVisiblePages = ({ currentPage, totalPages }: { currentPage: number; totalPages: number }) => {
    if (totalPages < 7) {
      return [...Array(totalPages)].map((_, key) => key + 1);
    } else {
      if (currentPage % 5 >= 0 && currentPage > 4 && currentPage + 3 < totalPages) {
        return [1, null, currentPage - 1, currentPage, currentPage + 1, null, totalPages];
      } else if (currentPage % 5 >= 0 && currentPage > 4 && currentPage + 3 >= totalPages) {
        return [1, null, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        return [1, 2, 3, 4, 5, null, totalPages];
      }
    }
  };

  const pageNumbers = ({ currentPage, totalPages }: { currentPage: number; totalPages: number }) => {
    const pages = getVisiblePages({ currentPage, totalPages });

    return pages?.map((page: any, key: number) =>
      page == null ? (
        <Pagination.Ellipsis linkClassName="bg-transparent border-0" key={key} disabled />
      ) : (
        <Pagination.Item
          linkClassName="shadow-none"
          key={key}
          onClick={() => page != currentPage && setPage(page)}
          active={page == currentPage}
        >
          {page}
        </Pagination.Item>
      ),
    );
  };

  return (
    <Pagination size={size}>
      {firstLastVisible && (
        <Pagination.First
          linkClassName="shadow-none"
          disabled={(page || pagination?.currentPage) == 1}
          onClick={() => setPage(1)}
        />
      )}
      <Pagination.Prev
        linkClassName="shadow-none"
        disabled={(page || pagination?.currentPage) == 1}
        onClick={() => setPage(+(page || pagination?.currentPage) - 1)}
      />
      {pageNumbers({
        currentPage: +(page || pagination?.currentPage),
        totalPages: pagination?.totalPages,
      })}
      <Pagination.Next
        linkClassName="shadow-none"
        disabled={(page || pagination?.currentPage) == pagination?.totalPages}
        onClick={() => setPage(+(page || pagination?.currentPage) + 1)}
      />
      {firstLastVisible && (
        <Pagination.Last
          linkClassName="shadow-none"
          disabled={(page || pagination?.currentPage) == pagination?.totalPages}
          onClick={() => setPage(+pagination?.totalPages)}
        />
      )}
    </Pagination>
  );
};
export default DynaPagination;
